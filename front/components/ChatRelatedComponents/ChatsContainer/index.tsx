import React, { useCallback, useEffect, useRef, useState, createContext } from 'react';
import Header from '@components/ChatRelatedComponents/ChatsContainer/Header';
import ChatList from '@components/ChatRelatedComponents/ChatsContainer/ChatList';
import ChatBox from './ChatBox';
import { Container } from './style';
import useInput from '@hooks/useInput';
import { IDM } from '@typings/db';
import { Scrollbars } from 'react-custom-scrollbars-2';
import useSWRInfinite from 'swr/infinite';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router-dom';
import makeDateSection from '@utils/makeDateSection';
import useSocket from '@hooks/useSocket';
import DragOver from '@components/ChatRelatedComponents/ChatsContainer/DragOver';

interface IProps {
  show: boolean;
  showSideMenu: () => void;
}

interface IForm {
  chat: string;
}

type IFile = {
  name: string;
  size: number;
  type: string;
};

export interface IChatContext {
  chat: string;
  onChangeChat: (e: any) => void;
  setChat: React.Dispatch<React.SetStateAction<string>>;
  files: IFile[];
  onChangeFiles: any;
  setFiles: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: (e?: any) => void;
  [key: string]: any;
}

export const ChatContext = createContext<IChatContext | null>(null);

const ChatsContainer = ({ show, showSideMenu }: IProps) => {
  const myData = { id: 1, nickname: 'me' };
  const userData = { id: 1, nickname: 'example' };
  const club = 'general';
  const { id } = useParams<{ id: string }>();
  const [chat, onChangeChat, setChat] = useInput('');
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState<IFile[]>([]);
  const [socket] = useSocket(club);
  const scrollbarRef = useRef<Scrollbars>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const {
    data: chatData,
    mutate: mutateChat,
    setSize,
  } = useSWRInfinite<IDM[]>((pageIdx) => `/api/club/dm/${id}/chats?perPage=20&page=${pageIdx + 1}`, fetcher);

  const chatsData: IDM[] = [
    {
      id: 20,
      content: '@[example3](3) 안녕 만나서 반가어zzzzzzzzz\n',
      Sender: { id: 2, nickname: myData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-10',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 19,
      content: '@[example3](3) 안녕 만나서 반가어zzzzz\n',
      SenderId: 1,
      Sender: { id: 2, nickname: myData.nickname + id },
      ReceiverId: 2,
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-10',
    },
    {
      id: 18,
      content: '@[example3](3) 안녕 만나서 반가어\n',
      SenderId: 1,
      Sender: { id: 2, nickname: myData.nickname + id },
      ReceiverId: 2,

      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-10',
    },
    {
      id: 17,
      content: '@[example3](3) 안녕 만나서 반가어\n',
      SenderId: 1,
      ReceiverId: 2,
      Sender: { id: 2, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-10',
    },
    {
      id: 16,
      content: '@[example3](3) hello',
      Sender: { id: 4, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-09',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 15,
      content: '@[example3](3) 안녕 만나서 반가어\n',
      Sender: { id: 2, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-09',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 14,
      content: '@[example3](3) hello',
      Sender: { id: 4, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-09',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 13,
      content: '@[example3](3) 안녕 만나서 반가어\n',
      Sender: { id: 2, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-08',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 12,
      content: '@[example3](3) hello',
      Sender: { id: 4, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-08',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 11,
      content: '@[example1](1) hhahahah',
      Sender: { id: 6, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-08',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 10,
      content: '@[example3](3) 안녕 만나서 반가어',
      Sender: { id: 2, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-07',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 9,
      content: '@[example3](3) 안녕 만나서 반가어',
      Sender: { id: 2, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-06',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 8,
      content: '@[example3](3) 안녕 만나서 반가어',
      Sender: { id: 2, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-06',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 7,
      content: '@[example3](3) 안녕 만나서 반가어',
      Sender: { id: 2, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-06',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 6,
      content: '@[example3](3) 안녕 만나서 반가어',
      Sender: { id: 2, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-05',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 5,
      content:
        'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',

      Sender: { id: 4, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-05',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 4,
      content:
        'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',

      Sender: { id: 6, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-04',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 3,
      content:
        'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',

      Sender: { id: 6, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-03',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 2,
      content:
        'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ\n\nㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ\n\nㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',

      Sender: { id: 6, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-01',
      SenderId: 1,
      ReceiverId: 2,
    },
    {
      id: 1,
      content:
        'According to the National Institute on Drug Abuse, the three classes of prescription drugs that are often abused include:\n Opioids used to treat pain Central nervous system (CNS) depressants, such as benzodiazepines (Xanax, Valium, Ativan, Klonopin), used to treat anxiety and sleep disorders Stimulants, such as amphetamine and dextroamphetamine (Adderall) or methylphenidate (Concerta, Daytrana, Methylin, Ritalin) used to treat attention deficit disorder and narcolepsy (a sleep disorder). \nREAD MORE',
      Sender: { id: 6, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: '2022-08-01',
      SenderId: 1,
      ReceiverId: 2,
    },
  ];

  const isEmpty = chatData?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < 20) || false;

  const onChangeFiles = useCallback((e: any) => {
    console.log(e.target.files);
  }, []);

  const onSubmit = useCallback(() => {
    // console.log('>>>', chat.trim());
    const savedChat = chat;
    // axios 로 서버에 도달하기 이전에 데이터 집어 넣기
    // mutateChat((prevChatData) => {
    //   prevChatData?.[0].unshift({
    //     id: (chatData[0][0]?.id || 0) + 1,
    //     content: savedChat,
    //     SenderId: myData.id,
    //     Sender: myData,
    //     ReceiverId: userData.id,
    //     Receiver: userData,
    //     createdAt: new Date(),
    //   });
    //
    //   return prevChatData;
    // }, false);
    // }).then(() => {
    //     setChat('');
    //    scrollbarRef?.current?.scrollToBottom();
    // });

    // axios.

    setChat('');
    scrollbarRef?.current?.scrollToBottom();
    // textareaRef?.current?.
  }, [chat, chatsData]);

  // const onMessage = useCallback((data: IDM) => {
  //   // if ((data.Channel.name === channel && data.content.startsWith('uploads\\')) || data.UserId !== myData?.id) => channel
  //     if (data.SenderId === Number(id) && myData.id !== Number(id)) {
  //       mutateChat((chatData) => {
  //         return { data, ...chatData };
  //       }, false).then(() => {
  //         if (scrollbarRef.current) {
  //           if (
  //             scrollbarRef.current.getScrollHeight() <
  //             scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150
  //           ) {
  //             console.log('scrollToBottom', scrollbarRef.current.getValues());
  //             setTimeout(() => {
  //               scrollbarRef.current?.scrollToBottom();
  //             }, 50);
  //           }
  //         }
  //       });
  //     }
  // }, []);
  //
  // useEffect(() => {
  //   socket?.on('dm', onMessage);
  //   return socket?.off('dm', onMessage);
  // }, [socket, onMessage]);

  const chatSections = makeDateSection(chatsData ? [...chatsData].flat().reverse() : []);

  useEffect(() => {
    if (chatsData?.length === 1) {
      scrollbarRef.current?.scrollToBottom();
    }
  }, [chatsData]);

  const onDragOver = useCallback((e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setDragOver(true);
  }, []);

  // onDrop 시 이미지 업로드
  const onDrop = useCallback(
    (e: any) => {
      e.preventDefault();
      setDragOver(false);
      const formData = new FormData();
      let items = e.dataTransfer.items || e.dataTransfer.files || [];
      for (let i = 0; i < items.length; i++) {
        const file = items[i].kind === 'file' ? items[i].getAsFile() : items[i];
        formData.append('image', file);
      }

      // axios ~~ then =>
    },
    [mutateChat, club, id],
  );

  const contextValues = {
    chat,
    onChangeChat,
    setChat,
    files,
    setFiles,
    onChangeFiles,
    onSubmit,
  };

  /* mission - 어다까지 읽었는지 표시 */
  /* mission - 스크롤이 위에 있을 때(과거 내역 읽고 있는 중) 추가된 메시지는 하단에 10초간 띄워져 있기. */

  return (
    <Container show={show} onDragOver={onDragOver} onDrop={onDrop}>
      <Header show={show} showSideMenu={showSideMenu} />
      <ChatList chatSections={chatSections} ref={scrollbarRef} setSize={setSize} isReachingEnd={isReachingEnd} />
      <ChatContext.Provider value={contextValues}>
        <ChatBox ref={textareaRef} />
      </ChatContext.Provider>
      {dragOver && <DragOver />}
    </Container>
  );
};

export default ChatsContainer;
