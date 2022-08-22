import styled from '@emotion/styled';

export const ChatZone = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;
export const Section = styled.section`
  margin-top: 20px;
  border-top: 1px solid #eee;
  width: 100%;
  background-color: #fff;
`;
export const StickyHeader = styled.header`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: sticky;
  top: 14px;
  z-index: 10;

  & button {
    background-color: #fff;
    font-weight: 700;
    font-size: 13px;
    height: 28px;
    line-height: 27px;
    padding: 0 10px 0 16px;
    border-radius: 24px;
    position: relative;
    top: -13px;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    display: flex;
    align-items: center;
    cursor: pointer;
    > svg {
      font-size: 20px;
      margin-left: 2px;
    }
  }
`;
