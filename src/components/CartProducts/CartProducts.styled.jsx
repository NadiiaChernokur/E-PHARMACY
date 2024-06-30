import styled from 'styled-components';
export const CartProductUl = styled.ul`
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
  }
`;
export const CartProductLi = styled.li`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  display: flex;
  gap: 20px;
`;
export const CartProductImgDiv = styled.div`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  width: 122px;
  height: 133px;
  display: flex;
`;

export const CartProductInfDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 318px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: #6a6a6f;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 549px;
  }
`;

export const CartProductNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
`;
export const CartProductButtonsDiv = styled.div`
  display: flex;
  width: 108px;
  padding: 0 18px;
  border-radius: 40px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #1d1e21;
  gap: 12px;
`;
export const CartProductRemove = styled.button`
  border-radius: 40px;
  border: none;
  padding: 8px 12px;
  width: 89px;
  height: 33px;
  background: rgba(232, 80, 80, 0.1);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.05em;
  text-align: center;
  color: #e85050;
`;

export const CartProductPlusMinusButton = styled.button`
  background: none;
  border: none;
  color: #59b17a;
  font-size: 27px;
`;
export const CartButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartEmpty = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
`;
