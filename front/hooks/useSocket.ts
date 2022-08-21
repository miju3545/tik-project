import io from 'socket.io-client';
import axios from 'axios';
import { useCallback } from 'react';

const backUrl = 'http://localhost:3090';

interface ISocket {
  [key: string]: SocketIOClient.Socket;
}
const sockets: ISocket = {};
const useSocket = (club?: string): [SocketIOClient.Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (club) {
      sockets[club].disconnect();
      delete sockets[club];
    }
  }, [club]);

  if (!club) return [undefined, disconnect];

  if (!sockets[club]) {
    sockets[club] = io.connect(`${backUrl}/club-${club}`, {
      transports: ['websocket'],
    });
  }

  return [sockets[club], disconnect];
};

export default useSocket;
