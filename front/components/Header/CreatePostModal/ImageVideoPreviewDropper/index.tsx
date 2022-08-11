import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { IoCloseOutline } from 'react-icons/io5';
import { FaPen } from 'react-icons/fa';
import { MdLibraryAdd } from 'react-icons/md';
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
    min-height: 220px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
    flex-wrap: wrap;

    > img {
      object-fit: cover;
      max-width: 100%;
      min-width: 33.3%;
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
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.2s;

  > .tools-wrapper {
    display: flex;
    position: absolute;
    top: 10px;
    left: 10px;

    > .tools {
      position: fixed;
      display: flex;

      > .tool {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: gray;
        margin-right: 10px;
        border: none;
        font-weight: 600;
        background-color: #dfdfdf;
        border-radius: 4px;
        cursor: pointer;

        > .icon {
          font-size: 17px;
        }
        > .title {
          font-size: 15px;
          margin-left: 8px;
        }
      }
    }
  }
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
        {previews.map((file, idx) => (
          <img key={idx} src={file.src} />
        ))}
      </div>
      <ToolBox className={'toolbox'}>
        <div className={'tools-wrapper'}>
          <div className={'tools'}>
            <button className={'tool'}>
              <span className={'icon'}>
                <FaPen />
              </span>
              <span className={'title'}>수정</span>
            </button>
            <label className={'tool'}>
              <input type={'file'} multiple={true} {...register} accept={'image/jpeg, image/png, image/jpg'} hidden />
              <span className={'icon'}>
                <MdLibraryAdd />
              </span>
              <span className={'title'}>사진 및 동영상 추가</span>
            </label>
          </div>
        </div>
      </ToolBox>
    </Base>
  );
};

export default ImageVideoPreviewDropper;
