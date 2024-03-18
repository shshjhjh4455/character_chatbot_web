
# Character Chatbot

### Character Chatbot Web Service using NextJS  

## About this Project

### WIP in write


## Development

### 0. Clone repository
### 1. Install Project
```console
npm install --save-dev
```

### 2. Make .env File in Project Directory
```
# check .env.sample
DATABASE_URL= # MONGODB URL
NEXTAUTH_URL= # YOUR PUBLISH URL
NEXTAUTH_SECRET= # NEXTAUTH SECRET/KAKAO SECRET
GOOGLE_CLIENT_ID= # GOOGLE : API KEY
GOOGLE_CLIENT_SECRET= # GOOGLE : API SECRET
KAKAO_CLIENT_ID= # KAKAO : JAVASCRIPT API
JWT_KEY= # JSONWEBTOKEN : SECRET KEY
MAIL_AUTH= #NODEMIALER : GMAIL
MAIL_PASS= #NODEMAILER : APP PASSWORD
```

### 3. Set Prisma Client
```console
npx prisma db push
npx prisma generate
```

### 4. Run Project
```console
npm run dev
```

## About Dependencies
> package version in requirements.txt

#### prisma, @prisma/client
db orm tool

#### mongodb
login/chatbot data database

#### next-auth
login auth route tool

#### bcrypt
login password hashing tool

#### jsonwebtoken
session jwt tool

#### nodemailer
email sender for Sign Up Page Link
