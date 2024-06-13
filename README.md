<div align="center">

  ![](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/261e7bfe-71bf-4ae1-93af-8cf112556825)

  # 가상 캐릭터 챗봇
  
  ### 우리의 프로젝트는 영화 속 캐릭터와 친구처럼 대화하는 서비스입니다.
  ### 2024 Capstone Project <br/> 한성대학교 비공개선택
  
</div>

  ## 프로젝트 소개
  
  #### OTT(Over The Top) 플랫폼은 다양한 콘텐츠를 통 해 시청자들에게 큰 즐거움을 제공하고 있다. <br/> 본 과제는 넷플릭스와 같은 서비스들이 사용자 경험을 향상시키기 위한 혁신을 고려하여 OTT 플랫폼에 추가적인 수익을 창출하고 시청자의 몰입도를 높일 수 있는 새로운 서비스 모델을 제안한다. <br/> 이 모델은 드라마 속 캐릭터를 기반으로 한 인공지능 챗봇과의 상호작용을 통해 사용자가 콘텐츠를 더 깊이 이해하고 즐길 수 있게 하며, OTT 플랫폼과 콘텐츠 제작자에게는 추가적인 수익 구조와 시청자의 지속적인 관심을 유도하는 기회를 제공한다

  #### 본 과제는 드라마 속 캐릭터를 기반으로 한 AI 챗봇을 개발하여, 시청자들이 콘텐츠에 더 깊이 몰입할 수 있게 하는 서비스를 제안한다. <br/> 이 AI 챗봇은 사용자가 드라마의 특정 장면이나 캐릭터에 대해 질문할 때 실시간으로 응답하며, 사용자의 궁금증을 해결하고 콘텐츠 이해도를 높인다. <br/> 또한, 사용자가 캐릭터와 대화하며 감정적으로 교류할 수 있는 기능을 포함하여, 드라마 종영 후에도 캐릭터와의 연결을 유지할 수 있도록 한다. 

  ### [데모 버전 실행해보기](https://character-chatbot-web.vercel.app/)

  ## 팀원 소개

  | 이름       | 역할         |
  |------------|--------------|
  |    박정현   | 팀장, 챗봇 구현       |
  |    이승재   | 챗봇 구현     |
  |    서기원  | 웹 인터페이스 개발 |
  |    이한음  | 웹 인터페이스 개발 |
  |    신의환 | 웹 인터페이스 개발 |

  ## 프로젝트 구조 및 주요 적용 기술

  #### 개발도구: VS Code, ColabPro+
  #### 프레임워크: Next.js
  #### 라이브러리 : tailwind, prisma, NextAuth, nodemailer, bcrypt, swr, numpy, sklearn, tensorflow
  #### 데이터베이스: mongoDB
  #### 배포: vercel
  #### 주요 기술 : 랜덤포레스트, 신경망, 앙상블, 파인튜닝(openai)  
  
  ![75조_이미지_주요 적용 기술 및 구조](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/a23299d1-83de-453a-ac76-3cf0b77261ce "전체 구조도")
  *전체 구조도*

  ![소형 구조도](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/e09e4f9e-18e1-421d-8c31-58530afe86b1)
  *소형 구조도*

  ### 데이터베이스 구조도

  ![](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/2c0e9a16-f2ec-473f-a0df-a2b69a76af18)


  ### 앱 경로 구조
  ```
  ○ = 페이지 경로
  ƒ = api 경로
  Route (app)
  ┌ ○ / (root 경로)
  ├ ○ /_not-found (404 링크)
  ├ ○ /aboutus (설명 페이지)
  ├ ○ /chatbot (챗봇 프로필 목록 페이지)
  ├ ○ /chatbot/[id] (채팅방 페이지)
  ├ ○ /login (로그인용 페이지)
  ├ ○ /reset/[id] (비밀번호 초기화 페이지)
  ├ ○ /signup/[id] (회원가입 페이지)
  ├ ƒ /api/auth/[...nextauth] (인증/인가용 api, next-auth 사용)
  ├ ƒ /api/auth/login (db 로그인 조회 api)
  ├ ƒ /api/auth/user (db 유저 조회 api)
  ├ ƒ /api/auth/user/oauth (db 유저 oauth 조회 api)
  ├ ƒ /api/auth/user/reset (db 유저 비밀번호 초기화 api)
  ├ ƒ /api/chat (db 채팅 업로드 api)
  ├ ƒ /api/chat/openai (OPENAI api)
  ├ ƒ /api/chatbot/[chatbotId] (db 채팅 내역 조회 api)
  ├ ƒ /api/chatbots (db 챗봇 목록 조회 api)
  ├ ƒ /api/contact (회원가입 이메일 전송 api)
  ├ ƒ /api/contact/reset (비밀번호 초기화 이메일 전송 api)
  └ ƒ /api/verify (회원가입/비밀번호 초기화 시 이메일이 유효한지 검사 api)
  ```


  ## 작품 소개 사진
  ![시작](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/8baa5407-bcb6-46de-8adb-9ab46b9ff730)
  ![로그인](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/ede4c764-aed3-4616-b347-8eba5008f9b1)
  ![프로필 목록](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/97b0eb3a-12f0-4b6e-a4f7-84a5f356a0be)
  ![프로필 설명](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/4c7fbbb1-f2d5-4dc5-ad7e-832d3452640f)
  ![채팅](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/b6df9360-622f-41e6-8fdb-8bcde23b9c31)


  ## 기대효과
  ### 1) 수익성
  추가 구독료나 이용료를 통한 새로운 수익 모델로 OTT 플랫 폼과 콘텐츠 제작자에게 추가 적인 수익을 창출합니다.
  ### 2) 지속성
  AI 챗봇을 통한 지속적인 사용자 와의 상호작용은 콘텐츠 종영 후 에도 감정적 연결을 유지하여 장 기적인 관심을 유도합니다.

  ## 사용한 라이브러리 소개
  
  #### prisma, @prisma/client
  DB를 객체로 다루기 위한 ORM 라이브러리입니다.
  
  #### next-auth
  Next.js를 위한 인증/인가 라이브러리입니다.
  
  #### bcrypt
  안전하게 암호를 저장하기 위한 해쉬 라이브러리입니다.

  #### nodemailer
  회원가입 이메일을 발송하기 위한 라이브러리입니다.

  #### openai
  OPENAI API를 쉽게 다루기 위한 라이브러리입니다.

  #### SWR
  실시간 채팅을 long polling으로 구현하기 위해 사용한 서버 상태관리 라이브러리입니다.

  #### tailwindcss
  별도의 css 파일 외에도 html 안에서 쉽게 디자인을 하기 위해 사용한 라이브러리입니다.

  #### react-lottie-player
  홈 페이지에 사용되는 애니메이션이 json으로 돌아가도록 도와주는 라이브러리입니다.

  
  ## 개발 설정하기
  
  ### 0. Clone
  ```console
  git clone https://github.com/shshjhjh4455/character_chatbot_web.git
  ```
  
  ### 1. 프로젝트 설치
  ```console
  npm install
  ```
  
  ### 2. 환경변수 파일 설정하기
  ```console
  cp .env.smaple .env
  ```

  #### 설정해야 할 변수는 다음과 같습니다
  
  ```env
  DATABASE_URL= # MONGODB URL
  NEXTAUTH_URL= # 배포하는 URL, 로컬에서는 http://localhost:8000
  NEXTAUTH_SECRET= # 암호용으로 사용할 키, openssl rand -base64 32로 생성을 추천합니다
  GOOGLE_CLIENT_ID= # GOOGLE API 키
  GOOGLE_CLIENT_SECRET= # GOOGLE API 암호
  KAKAO_CLIENT_ID= # KAKAO API 키
  MAIL_AUTH= #NODEMIALER에서 쓸 GMAIL APP id
  MAIL_PASS= #NODEMAILER에서 쓸 GMAIL APP PASSWORD
  OPENAI_KEY= # OPENAI API KEY
  ```
  
  ### 3. Prisma 설정하기
  ```console
  npx prisma db push
  npx prisma generate
  ```
  
  ### 4. 프로젝트 실행
  ```console
  npm run dev
  ```
