# API

## User

### POST /api/user 
- 유저 생성
- body: {id: string, nickname: string, password: string}
- return 'ok' 

### GET /api/user
- 로그인 유저 정보 가져오기
- return IUser || false