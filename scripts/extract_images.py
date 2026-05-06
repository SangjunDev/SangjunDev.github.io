"""Extract embedded images from 포트폴리오_최종.pptx into ../images/.

Usage:
    python3 scripts/extract_images.py
"""
from __future__ import annotations

import shutil
import sys
import zipfile
from pathlib import Path


PPTX_NAME = "포트폴리오_최종.pptx"


def main() -> int:
    project_root = Path(__file__).resolve().parent.parent
    pptx_path = project_root / PPTX_NAME
    images_dir = project_root / "images"

    if not pptx_path.exists():
        print(f"PPTX not found: {pptx_path}", file=sys.stderr)
        return 1

    images_dir.mkdir(exist_ok=True)

    extracted = 0
    with zipfile.ZipFile(pptx_path) as z:
        for name in z.namelist():
            if not name.startswith("ppt/media/"):
                continue
            if not name.lower().endswith((".png", ".jpg", ".jpeg")):
                continue
            target = images_dir / Path(name).name
            with z.open(name) as src, open(target, "wb") as dst:
                shutil.copyfileobj(src, dst)
            print(f"  {name} -> images/{target.name}")
            extracted += 1

    print(f"Extracted {extracted} image(s) into {images_dir}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
