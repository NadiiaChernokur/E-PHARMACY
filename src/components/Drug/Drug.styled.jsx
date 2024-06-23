import styled from 'styled-components';
export const DrugContainer = styled.div`
  margin: 72px auto;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const DrugCart = styled.div`
  height: 531px;
  width: 364px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DrugImgDiv = styled.div`
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 27px;
  padding: 14px 18px;
  width: 364px;
  height: 337px;
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
`;
export const DrugNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
`;
export const DrugFirm = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.6);
`;

export const DrugButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 60px;
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
`;

export const InformDiv = styled.div`
  border-radius: 27px;
  width: 800px;
  height: 709px;
  background: #fff;
  padding: 40px;
`;
