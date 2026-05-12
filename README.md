# Claim Marketing Page

Claim 사전예약 랜딩페이지. Astro + Tailwind CSS 기반 정적 사이트.

## 기술 스택

- **Astro 5** — 정적 사이트 생성기 (JS 0KB 출력)
- **Tailwind CSS 3** — 사용된 클래스만 빌드에 포함
- **Vercel** — 정적 배포

## 개발

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # ./dist 에 빌드
npm run preview   # 빌드 결과 미리보기
```

## Vercel 배포

Vercel은 Astro 프로젝트를 자동 감지합니다.

1. GitHub에 푸시
2. [vercel.com](https://vercel.com) 에서 Import Project
3. Framework Preset: **Astro** (자동 선택됨)
4. Deploy

별도 설정 파일 불필요.

## 주요 파일

- `src/pages/index.astro` — 랜딩페이지 본문 (Hero / Problem / Solution / CTA)
- `src/layouts/Layout.astro` — HTML 셸 및 메타데이터
- `astro.config.mjs` — Astro 설정
- `tailwind.config.mjs` — Tailwind 설정

## 카카오 채널 링크

`src/pages/index.astro` 상단의 두 상수를 실제 URL로 교체하세요.

```ts
const KAKAO_CHANNEL_CUSTOMER = '...'; // 일반고객 트래픽
const KAKAO_CHANNEL_AGENT = '...';    // 설계사 트래픽
```

UTM 파라미터로 트래픽을 구분하고 있습니다.
