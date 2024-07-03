import styled from 'styled-components';
export const DrugContainer = styled.div`
  margin: 72px auto;
  display: flex;
  gap: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DrugCart = styled.div`
  height: 531px;
  width: 364px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: row;
    width: 688px;
    height: 284px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`;
export const DrugImgDiv = styled.div`
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 27px;
  padding: 14px 18px;
  width: 364px;
  height: 337px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const DrugInfDiv = styled.div`
  border-radius: 20px;
  width: 364px;
  height: 174px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 324px;
    height: 284px;
    position: relative;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const DrugNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
    gap: 54px;
  }
`;
export const DrugFirm = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.6);
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    position: absolute;
    top: 53px;
  }
`;

export const DrugButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 60px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    gap: 12px;
  }
`;

export const DrugAddButton = styled.button`
  border-radius: 60px;
  border: none;
  padding: 13px 32px;
  width: 140px;
  height: 44px;
  background: #59b17a;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const PlusMinusDiv = styled.div`
  border-radius: 60px;
  display: flex;
  gap: 12px;
  width: 108px;
  height: 44px;
  padding: 12px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`;
export const PlusMinusButton = styled.button`
  color: #59b17a;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: #28fc2f;
  }
`;

export const InformDiv = styled.div`
  border-radius: 27px;
  width: 800px;
  background: #fff;
  padding: 40px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 20px;
  }
`;
export const InformButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
`;
export const InformButton = styled.button`
  border-radius: 40px;
  border: none;
  padding: 8px 25px;
  width: 120px;
  height: 33px;
  background: ${({ $prop }) =>
    $prop ? ' #59b17a' : 'rgba(89, 177, 122, 0.1)'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.05em;
  text-align: center;
  color: ${({ $prop }) => ($prop ? ' #fff' : '#59b17a')};
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
