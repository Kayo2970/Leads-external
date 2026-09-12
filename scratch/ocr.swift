import Foundation
import Vision
import AppKit

let args = CommandLine.arguments
if args.count > 1 {
    let path = args[1]
    guard let image = NSImage(contentsOfFile: path),
          let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        print("Failed to load image: \(path)")
        exit(1)
    }
    let request = VNRecognizeTextRequest { request, error in
        guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
        for obs in observations {
            if let candidate = obs.topCandidates(1).first {
                print(candidate.string)
            }
        }
    }
    request.recognitionLevel = .accurate
    let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
    try? handler.perform([request])
}
