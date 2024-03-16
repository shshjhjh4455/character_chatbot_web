
<div align="center">

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

### 2. Set Prisma Client
```console
npx prisma db push
npx prisma generate
```

### 3. Make .env File in Project Directory
```
# check .env.sample
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```
> DATABASE_URL={your mongodb uri}  
> NEXTAUTH_URL={your deploy url. ex:localhost:3000}  
> NEXTAUTH_SECRET={secret like base64}  
> GOOGLE_CLIENT_ID={Google API Key}  
> GOOGLE_CLIENT_SECRET={Goolge API Secret}  

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

</div>