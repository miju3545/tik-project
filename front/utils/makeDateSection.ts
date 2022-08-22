import { IDM } from '@typings/db';
import dayjs from 'dayjs';

const makeDateSection = (chatList: IDM[]) => {
  const sections: { [key: string]: IDM[] } = {};
  chatList.forEach((chat) => {
    const monthAndDate = dayjs(chat.createdAt).format('YYYY-MM-DD');
    if (Array.isArray(sections[monthAndDate])) {
      sections[monthAndDate].push(chat);
    } else {
      sections[monthAndDate] = [chat];
    }
  });

  return sections;
};

export default makeDateSection;
