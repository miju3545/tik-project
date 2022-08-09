import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { IoCloseOutline } from 'react-icons/io5';
import { MdAddToPhotos } from 'react-icons/md';
interface IProps {
  show: boolean;
  onCloseModal: () => void;
  register: any;
}

export const Base = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  margin-top: 20px;

  > .close-button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border: 1px solid #dfdfdf;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #fff;
    cursor: pointer;
  }

  > label {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f6f8fa;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;

    > .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      background-color: #e4e6ea;
      margin-bottom: 4px;
    }

    > .big-text {
      font-size: 16px;
      font-weight: 600;
    }
    > .small-text {
      font-size: 13px;
      color: gray;
    }

    &:hover {
      background-color: #efefef;
    }
  }
`;
const ImageVideoDropper = ({ show, onCloseModal, register }: IProps) => {
  if (!show) return null;

  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);
  return (
    <Base onClick={stopPropagation}>
      <button className="close-button" onClick={onCloseModal}>
        <IoCloseOutline />
      </button>
      <label>
        <input type={'file'} {...register} hidden />
        <div className={'icon'}>
          <MdAddToPhotos />
        </div>
        <span className={'big-text'}>사진/동영상 추가</span>
        <span className={'small-text'}>또는 끌어서 놓습니다</span>
      </label>
    </Base>
  );
};

export default ImageVideoDropper;
