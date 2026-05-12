# Claim Marketing Page

Claim 사전예약 랜딩페이지. Astro + Tailwind CSS 기반 정적 사이트.

## 기술 스택

- **Astro 5** — 정적 사이트 생성기 (JS 0KB 출력)
- **Tailwind CSS 3** — 사용된 클래스만 빌드에 포함
- **Vercel** — 정적 배포

## 개발

```bash
npm install
cp .env.example .env  # 처음 한 번만 — 실제 URL 채워넣기
npm run dev           # http://localhost:4321
npm run build         # ./dist 에 빌드
npm run preview       # 빌드 결과 미리보기
```

## 환경변수

`.env`에 두 개의 CTA URL을 설정합니다. Astro에서 클라이언트 노출 변수는 `PUBLIC_` 접두사 필수.

| 변수 | 용도 |
|---|---|
| `PUBLIC_KAKAO_CHANNEL_CUSTOMER` | 일반고객 사전예약 — 카카오 채널 추가 링크 (현재 돕다 채널, Claim 채널 승인 대기) |
| `PUBLIC_AGENT_FORM_URL` | 설계사 사전예약 — Google Form URL |

빌드 시점에 정적 HTML로 인라인되므로, 값을 바꾸려면 재빌드/재배포가 필요합니다.

## Vercel 배포

Vercel은 Astro 프로젝트를 자동 감지합니다.

1. GitHub에 푸시
2. [vercel.com](https://vercel.com) 에서 Import Project
3. Framework Preset: **Astro** (자동 선택됨)
4. **Environment Variables** 에 `PUBLIC_KAKAO_CHANNEL_CUSTOMER`, `PUBLIC_AGENT_FORM_URL` 두 개 추가
5. Deploy

## 주요 파일

- `src/pages/index.astro` — 랜딩페이지 본문 (Hero / Problem / How it works / Solution / Final CTA)
- `src/layouts/Layout.astro` — HTML 셸 및 메타데이터
- `astro.config.mjs` — Astro 설정
- `tailwind.config.mjs` — Tailwind 설정
- `.env.example` — 환경변수 템플릿
