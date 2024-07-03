import styled from 'styled-components';
import photoM from '../../img/add-mob.png';
import photo from '../../img/Add.png';
export const AddMedicinesContainer = styled.div`
  border-radius: 32px;
  padding: 40px 40px 40px 80px;
  width: 1248px;
  height: 486px;
  background: #59b17a;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
    height: 911px;
    padding: 40px 48px;
    flex-direction: column;
    gap: 83px;
  }
  @media screen and (max-width: 767px) {
    padding: 20px;
    width: 335px;
    height: 674px;
    flex-direction: column;
    gap: 39px;
  }
`;

export const AddMedicinesLeft = styled.div`
  width: 488px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const AddMedicinesParagraf = styled.p`
  font-weight: 600;
  font-size: 48px;
  line-height: 115%;
  letter-spacing: -0.01em;
  color: #f1f1f1;
  margin-bottom: 24px;
  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 114%;
  }
`;
export const AddMedicinesText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #f1f1f1;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 129%;
  }
`;
export const AddMedicinesButton = styled.button`
  border: 1px solid rgba(241, 241, 241, 0.5);
  border-radius: 60px;
  padding: 13px 50px;
  background: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #f1f1f1;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const AddMedicinesImgDiv = styled.div`
  width: 608px;
  height: 406px;
  background-image: url(${photo});
  @media screen and (max-width: 767px) {
    width: 295px;
    height: 335px;
    background-image: url(${photoM});
  }
`;
