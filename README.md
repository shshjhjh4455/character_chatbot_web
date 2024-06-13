<div align=center>

  ![](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/261e7bfe-71bf-4ae1-93af-8cf112556825)
  # Character Chatbot
  
  ### 가상 캐릭터 챗봇 - 우리의 프로젝트는 영화 속 캐릭터와 친구처럼 대화하는 서비스입니다.
  
  ## 프로젝트 소개
  
  #### OTT(Over The Top) 플랫폼은 다양한 콘텐츠를 통 해 시청자들에게 큰 즐거움을 제공하고 있다. <br/> 본 과제는 넷플릭스와 같은 서비스들이 사용자 경험을 향상시키기 위한 혁신을 고려하여 OTT 플랫폼에 추가적인 수익을 창출하고 시청자의 몰입도를 높일 수 있는 새로운 서비스 모델을 제안한다. <br/> 이 모델은 드라마 속 캐릭터를 기반으로 한 인공지능 챗봇과의 상호작용을 통해 사용자가 콘텐츠를 더 깊이 이해하고 즐길 수 있게 하며, OTT 플랫폼과 콘텐츠 제작자에게는 추가적인 수익 구조와 시청자의 지속적인 관심을 유도하는 기회를 제공한다

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
  ![75조_이미지_주요 적용 기술 및 구조](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/a23299d1-83de-453a-ac76-3cf0b77261ce "전체 구조도")
  *전체 구조도*

  ## 데이터베이스 구조도

  ![](https://github.com/shshjhjh4455/character_chatbot_web/assets/115919002/2c0e9a16-f2ec-473f-a0df-a2b69a76af18)

  
  ## 개발 설정하기
  
  ### 0. Clone
  ```console
  git clone https://github.com/c](https://github.com/shshjhjh4455/character_chatbot_web.git
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

  ## 기술 소개

  ### 사용한 라이브러리 소개
  
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
  
</div>

