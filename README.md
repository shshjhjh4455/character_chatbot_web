# 🎬 Movie Character AI Chatbot (가상 캐릭터 챗봇)

> OTT 플랫폼 시청자의 몰입도를 높이기 위해, 영화/드라마 속 캐릭터와 실시간으로 대화할 수 있는 AI 챗봇 서비스입니다. (2024 한성대학교 캡스톤 디자인)
> **단순한 UI 화면 개발을 넘어, Next.js 기반의 BFF(Backend For Frontend) 아키텍처를 직접 설계하여 클라이언트와 데이터베이스 간의 통신 비용을 최소화한 프로젝트입니다.**

🔗 **[데모 버전 실행해보기](https://character-chatbot-web.vercel.app/)**
*(※ 현재 AI 모델 서버 상태에 따라 응답이 지연될 수 있습니다.)*

<br/>

## 👥 팀 구성 및 역할
* **Web Team Lead:** 이한음 (웹 프론트엔드/백엔드 통합 개발 및 3인 웹 팀 리딩)
* **AI/Model Team:** 2명 (챗봇 모델 학습 및 API 배포)
* **개발 기간:** 2024.03 ~ 2024.07
* **기술 스택 (Web):** Next.js, TypeScript, Tailwind CSS, SWR, NextAuth, Prisma, MongoDB

<br/>

## 🔥 핵심 성과 (Key Achievements)

### 1. 🏗️ Next.js + Prisma 기반의 BFF 풀스택 아키텍처 설계
프론트엔드 개발에 국한되지 않고, 클라이언트와 서버 간의 데이터 흐름 전체를 주도적으로 설계했습니다.
* Next.js의 `API Routes`를 활용하여 외부 AI 모델 및 내부 DB와 통신하는 전용 서버 레이어 구축.
* ORM인 `Prisma`를 도입하여 MongoDB 데이터를 객체 지향적으로 다루고, 챗봇 프로필 및 채팅 로그 DB 스키마를 직접 설계.

### 2. ⚡ SWR을 활용한 실시간 대화 UX (Long Polling)
AI의 응답 지연 시간 동안 사용자의 이탈을 막고, 끊김 없는 채팅 경험을 제공하기 위해 비동기 통신을 최적화했습니다.
* `SWR`의 내부 캐싱 및 데이터 동기화 기능을 활용하여 **Long Polling** 방식의 실시간 채팅 환경 구현.
* 복잡한 비동기 상태(Loading, Error, Success)를 깔끔하게 처리하여 페르소나 몰입감 유지.

### 3. 🛡️ NextAuth 기반의 안전한 인증/인가 파이프라인 구축
사용자 데이터 보호를 위해 자체적인 보안 프로세스를 프론트엔드 단에서 직접 구현했습니다.
* `NextAuth.js`를 활용하여 Google/Kakao OAuth 소셜 로그인 연동.
* `bcrypt`를 활용한 비밀번호 해싱 및 `Nodemailer`를 이용한 이메일 인증 코드를 통해 안전한 자체 회원가입/비밀번호 찾기 플로우 구현.

### 4. 🤝 기술 리더십 및 협업
* 비전공자 팀원들을 위한 멘토링 및 코드 리뷰를 주도하여 웹 팀의 기술 역량을 상향 평준화하고 프로젝트를 성공적으로 완주.

<br/>

## 🏛️ 아키텍처 및 시스템 구조도

![Architecture Overview](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/a23299d1-83de-453a-ac76-3cf0b77261ce)
![Database Schema](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/2c0e9a16-f2ec-473f-a0df-a2b69a76af18)

<br/>

## 💻 주요 서비스 화면
| 로그인 및 인증 | 챗봇 프로필 탐색 | 실시간 채팅 화면 |
| :---: | :---: | :---: |
| ![Login](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/ede4c764-aed3-4616-b347-8eba5008f9b1) | ![Profile](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/97b0eb3a-12f0-4b6e-a4f7-84a5f356a0be) | ![Chat](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/b6df9360-622f-41e6-8fdb-8bcde23b9c31) |
