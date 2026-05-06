# 김상준 · Portfolio 2026

`포트폴리오.pptx` 의 14개 슬라이드를 기반으로 만든 정적 랜딩 페이지.
GitHub Pages(User Pages)로 호스팅하기 위해 Vanilla HTML / CSS / JS 만 사용했습니다.

## 폴더 구조

```
.
├── index.html                 # 단일 페이지 (8개 섹션)
├── css/style.css              # 모노크롬 + 인디고 톤
├── js/main.js                 # 모바일 nav · 스크롤 동작
├── images/                    # 제품 이미지 6장 (PPTX에서 추출)
├── scripts/extract_images.py  # PPTX → images/ 추출 스크립트
├── 포트폴리오_최종.pptx        # 원본 PPTX (배포 대상은 아님)
├── .nojekyll                  # GitHub Pages Jekyll 처리 비활성화
└── README.md
```

## 로컬 미리보기

```bash
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 이미지 재추출

PPTX 가 갱신되면 다음 명령으로 `images/` 를 다시 채울 수 있습니다.

```bash
python3 scripts/extract_images.py
```

`ppt/media/image1.png` ~ `image6.png` 이 그대로 `images/` 로 복사되며,
각각 `index.html` 의 Product 1 ~ 6 카드와 1:1 대응합니다.

## GitHub Pages 배포 (User Pages 방식)

User Pages 는 계정당 1개만 만들 수 있으며 `https://<your-username>.github.io` 가
루트 URL이 됩니다.

1. **GitHub 에서 새 저장소 생성**
   - 이름: `<your-username>.github.io` (예: `sangjun-kim-dev.github.io`)
   - Public 으로 생성, README 자동 생성 옵션은 끄기

2. **이 폴더를 그 저장소로 푸시**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. **Pages 활성화**
   - 저장소 → Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)` → Save

4. **확인**
   - 1 ~ 2분 후 `https://<your-username>.github.io` 에서 사이트 확인
   - 콘솔 에러 0건, 6개 제품 이미지 정상 로드 여부 점검

## v1 범위 외

- 다크 테마 / 다국어(영문) 토글
- 컨택트 폼 (현재는 `mailto:` 링크로 처리)
- 블로그 / CMS 연결
