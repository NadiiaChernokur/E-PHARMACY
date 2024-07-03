import styled from 'styled-components';
export const MedicineStoreContainer = styled.div`
  width: 1223px;
  padding: 72px 20px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 43px;
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: #1d1e21;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
    padding: 62px 0px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0;
  }
`;
export const MedicineStoreUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    gap: 16px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }
`;
export const MedicineStoreLi = styled.li`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  padding: 40px;
  width: 381px;
  height: 276px;
  background: #e7f1ed;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 344px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    height: 202px;
    padding: 32px;
  }
`;
export const MedicineStoreName = styled.p`
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0px;
  }
`;
export const MedicineStoreAdres = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #93939a;
  display: flex;
  gap: 8px;
  @media screen and (max-width: 767px) {
    margin-bottom: 18px;
  }
`;
export const NameDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;
export const MedicineStoreVisiteDiv = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
`;

export const VisiteButton = styled.button`
  border-radius: 24px;
  padding: 10px 16px;
  border: none;
  background: #59b17a;
  height: 34px;
  width: 102px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const StarDiv = styled.div`
  display: flex;
  gap: 14px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const StarDivMob = styled.div`
  gap: 14px;
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;
export const StarNambeDiv = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const OpenDiv = styled.div`
  border-radius: 8px;
  padding: 8px 16px;
  width: 65px;
  height: 34px;
  background: rgba(89, 177, 122, 0.1);
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #59b17a;
  box-sizing: border-box;
`;
export const CloseDiv = styled.div`
  border-radius: 8px;
  padding: 8px 16px;
  width: 71px;
  height: 34px;
  background: rgba(232, 80, 80, 0.1);
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #e85050;
  box-sizing: border-box;
`;
export const StarNumber = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
`;
export const Adress = styled.p`
  width: 120px;
`;

export const SpinerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
