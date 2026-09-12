"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Download, FileText, Maximize2 } from "lucide-react";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  year?: string;
  fileSize?: string;
}

export default function PdfViewerModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  year,
  fileSize,
}: PdfViewerModalProps) {
  // Lock body scroll when open and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div
        className="relative w-full max-w-6xl h-[90vh] bg-[#1E0C3D] border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#2A1454] border-b border-white/10 text-white">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] flex items-center justify-center flex-shrink-0 shadow-md">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h2
                id="pdf-modal-title"
                className="text-sm sm:text-base font-bold text-white truncate"
              >
                {title}
              </h2>
              <div className="text-[11px] text-[#E2D9F3] flex items-center gap-2">
                {year && <span>{year}</span>}
                {fileSize && (
                  <>
                    <span>•</span>
                    <span>{fileSize}</span>
                  </>
                )}
                <span>•</span>
                <span className="text-emerald-400 font-medium">Verified PDF</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition-colors"
              title="Open in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Tab</span>
            </a>

            <a
              href={pdfUrl}
              download
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white text-xs font-bold shadow hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors ml-1"
              aria-label="Close viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Frame */}
        <div className="flex-1 bg-[#120726] relative h-full min-h-[500px]">
          <object
            data={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            type="application/pdf"
            className="w-full h-full border-0 min-h-[500px]"
          >
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=1`}
              title={title}
              className="w-full h-full border-0 min-h-[500px]"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center text-white bg-[#1E0C3D] space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DE3F11]/20 border border-[#DE3F11]/40 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-[#DE3F11]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white">Live PDF Preview</h3>
                  <p className="text-xs text-[#E2D9F3] max-w-md mt-1 leading-relaxed">
                    Your current browser configuration requires launching the document in a dedicated viewer tab or downloading it directly.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
                  >
                    Open in New Tab
                  </a>
                  <a
                    href={pdfUrl}
                    download
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9C1256] to-[#DE3F11] text-white font-bold text-xs shadow-md transition-all"
                  >
                    Download Official PDF
                  </a>
                </div>
              </div>
            </iframe>
          </object>
        </div>
      </div>
    </div>
  );
}
