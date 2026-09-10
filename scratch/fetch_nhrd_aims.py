import urllib.request
import urllib.parse
import re
import os

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}
out_dir = "/Users/kayo/Desktop/Leards External/public/images/partners"

sites = {
    "nhrd": "https://www.nhrdn.org",
    "aims": "https://aims-org.in"
}

for key, url in sites.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8", errors="ignore")
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.IGNORECASE)
        print(f"Found imgs for {key}:")
        for img in imgs:
            if "logo" in img.lower() or "brand" in img.lower() or "header" in img.lower():
                full_url = urllib.parse.urljoin(url, img)
                print("  Trying:", full_url)
                try:
                    img_req = urllib.request.Request(full_url, headers=headers)
                    data = urllib.request.urlopen(img_req, timeout=8).read()
                    if len(data) > 500:
                        ext = ".png" if ".png" in full_url.lower() else (".jpg" if ".jpg" in full_url.lower() else ".webp")
                        target = os.path.join(out_dir, f"{key}{ext}")
                        with open(target, "wb") as f:
                            f.write(data)
                        print(f"  SUCCESS saved to {target}")
                        break
                except Exception as ex:
                    print("  Failed:", ex)
    except Exception as e:
        print(f"Error {key}: {e}")
