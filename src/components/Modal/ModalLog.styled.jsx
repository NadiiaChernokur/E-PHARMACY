import { Field, Form } from 'formik';
import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
  overflow: auto;
`;

export const ModallogContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 463px;
  height: 414px;
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
export const ModalLogH3 = styled.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  text-align: center;
  color: #1d1e21;
`;
export const ModalLogForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 323px;
`;

export const ModalLogField = styled(Field)`
  width: 100%;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 13px 18px;
`;
export const ModalLogButton = styled.button`
  border-radius: 60px;
  border: none;
  padding: 13px;
  width: 100%;
  background: #59b17a;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 11px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
`;
export const ModalLogSpan = styled.span`
  color: #59b17a;
  text-decoration: underline;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const ModalLogCloseSvg = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 8px;
`;
