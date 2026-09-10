import urllib.request
import urllib.parse
import re
import os

sites = {
    "ficci": "https://ficci.in",
    "bcic": "https://www.bcic.in",
    "istd": "https://www.istd.co.in",
    "nhrd": "https://www.nhrdn.org",
    "aims": "https://www.aims-org.org",
    "aima": "https://www.aima.in"
}

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

out_dir = "/Users/kayo/Desktop/Leards External/public/images/partners"
os.makedirs(out_dir, exist_ok=True)

for key, url in sites.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8", errors="ignore")
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.IGNORECASE)
        logo_imgs = [i for i in imgs if "logo" in i.lower()]
        print(f"=== {key} ({url}) ===")
        if logo_imgs:
            src = logo_imgs[0]
            full_url = urllib.parse.urljoin(url, src)
            print("Downloading:", full_url)
            ext = ".png" if ".png" in full_url.lower() else (".jpg" if ".jpg" in full_url.lower() else (".svg" if ".svg" in full_url.lower() else ".webp"))
            target_file = os.path.join(out_dir, f"{key}{ext}")
            img_req = urllib.request.Request(full_url, headers=headers)
            with urllib.request.urlopen(img_req, timeout=10) as resp, open(target_file, "wb") as f:
                f.write(resp.read())
            print(f"Saved to {target_file}")
        else:
            print("No logo img found")
    except Exception as e:
        print(f"Error {key}: {e}")
