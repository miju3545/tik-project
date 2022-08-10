import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { IoCloseOutline } from 'react-icons/io5';
import { MdAddToPhotos } from 'react-icons/md';
interface IProps {
  show: boolean;
  onCloseModal: () => void;
  register: any;
  previews: { fileName: string; src: string }[];
}

export const Base = styled.div`
  width: 100%;
  max-height: 440px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  margin-top: 20px;
  overflow-x: scroll;

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
    transition: 0.2s;

    &:hover {
      background-color: #efefef;
    }
  }

  > .preview-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;

    > img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }

  &:hover + .toolbox {
    opacity: 1;
  }
`;

export const ToolBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.2s;
`;
const ImageVideoPreviewDropper = ({ show, onCloseModal, register, previews }: IProps) => {
  if (!show) return null;
  console.log('previews', previews);
  return (
    <Base>
      <button className="close-button" onClick={onCloseModal}>
        <IoCloseOutline />
      </button>
      <div className={'preview-box'}>
        <input type={'file'} {...register} hidden />
        {previews.map((file, idx) => (
          <img key={idx} src={file.src} />
        ))}
      </div>
      <ToolBox className={'toolbox'}></ToolBox>
    </Base>
  );
};

export default ImageVideoPreviewDropper;
