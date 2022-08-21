# API

## User

### POST /api/user 
- 유저 생성
- body: {id: string, nickname: string, password: string}
- return 'ok' 

### GET /api/user
- 로그인 유저 정보 가져오기
- return IUser || false

### POST /api/user/logout
- 로그아웃
- return "ok"

# WebSocket
- 웹소켓 API

## socket.on
- 서버에서 클라이언트로 보내는 이벤트
- 클라이언트에서는 on 으로 받음

### onlineList
- 현재 온라인인 사람들 아이디 목록
- 서버 data: number[](아이디 목록)

### message
- 새로운 채널 메시지가 올 때
- 서버 data: IChat(채팅 데이터)

### dm
- 새로운 dm 메시지가 올 때
- 서버 data: IDM(디엠 데이터)

## socket.emit
- 클라이언트에서 서버로 보내는 이벤트
- 클라이언트에서는 emit 으로 보냄

### login
- 워크스페이스, 클럽/채널이 로딩 완료되었을 때 서버에 로그인했음을 알리는 이벤트
- 클라이언트 data: {id: number(유저 아이디), clubs: number[](클럽 아이디 리스트)}

## disconnet
- 클라이언트에서 소켓 연결을 종료하는 함수