import { Field, Form } from 'formik';
import styled from 'styled-components';
export const MedicineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 1223px;
  padding: 72px 20px 120px 20px;
  margin: auto;
  box-sizing: border-box;
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
export const MedicineH2 = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: #1d1e21;
`;
export const MedicineUl = styled.ul`
  display: flex;
  gap: 21px;
  flex-wrap: wrap;
  margin: auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    gap: 13px;
  }
  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`;
export const MedicineLi = styled.li`
  width: 280px;
  box-sizing: border-box;
  height: 423px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 226px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    height: 435px;
  }
`;
export const MedicineImgDiv = styled.div`
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 20px;
  padding: 14px 18px;
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    height: 260px;
  }
  @media screen and (max-width: 767px) {
    height: 300px;
  }
`;
export const MedicineInfDiv = styled.div`
  width: 280px;
  height: 135px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 100%;
    height: 135px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`;
export const MedicineNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;
export const MedicineFirm = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.6);
  margin-bottom: 14px;
`;
export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MedicineAddButton = styled.button`
  border-radius: 24px;
  border: none;
  padding: 10px 16px;

  background: #59b17a;
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
`;
export const MedicineDetailsButton = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #1d1e21;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const FilterButton = styled.button`
  border-radius: 60px;
  padding: 13px 30px;
  width: 116px;
  height: 44px;
  background: #59b17a;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const FilterForm = styled(Form)`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const FieldSelector = styled(Field)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 214px;
  height: 44px;
  background: #fff;
  margin-right: 6px;
  padding: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const FieldSearch = styled(Field)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 214px;
  background: #fff;
  margin-right: 6px;
  padding: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const SearchSvg = styled.svg`
  position: absolute;
  top: 15px;
  right: 20px;
`;
