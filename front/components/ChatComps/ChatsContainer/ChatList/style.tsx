import styled from '@emotion/styled';

export const ChatZone = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;
export const Section = styled.section`
  margin-top: 20px;
  border-top: 1px solid #eee;
`;
export const StickyHeader = styled.header`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: sticky;
  top: 14px;

  & button {
    font-weight: 700;
    font-size: 13px;
    height: 28px;
    line-height: 27px;
    padding: 0 16px;
    z-index: 2;
    box-shadow: 0 0 0 1px, 0 1px 3px 0 rgba(0, 0, 0, 0.8);
    border-radius: 24px;
    position: relative;
    top: -13px;
    background-color: #fff;
    border: none;
    outline: none;
  }
`;
