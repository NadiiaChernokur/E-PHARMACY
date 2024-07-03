import { Field } from 'formik';
import styled from 'styled-components';

export const ModalRegContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 463px;
  margin: auto;
  position: relative;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 101;
  gap: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #6a6a6f;
`;
export const ModalRegField = styled(Field)`
  width: 100%;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 13px 18px;
`;
export const ModalRegH3 = styled.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  text-align: center;
  color: #1d1e21;
`;
