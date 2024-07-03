import styled from 'styled-components';
export const InformationUl = styled.ul`
  display: flex;
  gap: 28px;
  width: 1019px;
  margin: auto;
  margin-bottom: 120px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 670px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    flex-direction: column;
  }
`;
export const InformationLi = styled.li`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  padding: 14px 18px;
  width: 321px;
  height: 167px;
  margin: auto;
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 335px;
    height: 126px;
    justify-content: space-between;
  }
`;
export const TopInformationDiv = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #252539;
`;

export const NumberDiv = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 100%;
  background: rgba(231, 241, 237, 0.4);
  font-weight: 400;
  font-size: 28px;
  line-height: 100%;
  text-align: center;
  color: #59b17a;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 54px;
    height: 54px;
  }
`;
export const BottomInformationDiv = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  font-weight: 500;
  font-size: 36px;
  line-height: 140%;
  color: #252539;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;
export const ShopNow = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  color: #93939a;
`;
