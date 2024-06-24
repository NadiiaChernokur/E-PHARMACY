import styled from 'styled-components';
export const CartContainer = styled.div`
  width: 1224px;
  padding: 20px;
  margin: auto;
`;
export const CartMain = styled.div`
  display: flex;
  gap: 96px;
`;

export const CartFormDiv = styled.div`
  border-radius: 27px;
  width: 628px;
  height: 883px;
  background: #fff;
  padding: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #6a6a6f;
`;
export const CartFormHead = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 14px;
`;

export const CartInput = styled.input`
  border: 1px solid rgba(29, 30, 33, 0.2);
  border-radius: 60px;
  width: 260px;
  height: 44px;
  padding: 18px;
  display: flex;
  margin-top: 8px;
`;
export const CartLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
  position: relative;
  left: 20px;
`;

export const CartForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 40px;
`;
export const CartPriceDiv = styled.div`
  border-radius: 8px;
  width: 548px;
  height: 65px;
  background: #e7f1ed;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
`;
export const CartFormButton = styled.button`
  border-radius: 60px;
  border: none;
  padding: 13px 32px;
  width: 141px;
  height: 44px;
  background: #59b17a;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
`;
