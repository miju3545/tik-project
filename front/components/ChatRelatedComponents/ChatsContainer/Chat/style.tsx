import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 8px 20px;
  width: 100%;
  position: relative;

  &:hover {
    background-color: #efefef;

    & .toolbox-area {
      display: block;
    }
  }

  & .chat-img {
    display: flex;
    width: 36px;
    margin-right: 8px;
    & img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }

  > .chat-text {
    > .chat-user {
      display: flex;
      align-items: baseline;
      > .user-nickname {
        font-size: 14px;
        font-weight: 600;
      }
      > .created-at {
        font-size: 12px;
        line-height: 14px;
        margin-left: 6px;
        color: gray;
      }
    }

    > p {
      margin-top: 5px;
    }
  }

  > .toolbox-area {
    display: none;
    transition: 0.2s;
    position: absolute;
    top: -20px;
    right: 20px;
  }
`;

export const MentionPill = styled(Link)`
  padding: 3px 8px;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  color: gray;
  transition: 0.2s;

  &:hover {
    border-color: #191919;
    color: #191919;
    background-color: #fff;
  }
`;
