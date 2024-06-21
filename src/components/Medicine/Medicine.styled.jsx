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
`;

export const MedicineUl = styled.ul`
  display: flex;
  gap: 21px;
  flex-wrap: wrap;
  margin: auto;
`;
export const MedicineLi = styled.li`
  width: 280px;
  box-sizing: border-box;
  height: 423px;
  display: flex;
  gap: 8px;
`;
export const MedicineImgDiv = styled.div`
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 20px;
  padding: 14px 18px;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
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
  padding: 10px 16px;
  /* width: 108px;
  height: 34px; */
  background: #59b17a;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #fff;
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
`;
