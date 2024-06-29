import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';
export const RegisterContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 54px;
  padding: 199px 0;

  box-sizing: border-box;
`;
export const RegisterText = styled.div`
  width: 540px;
  position: relative;
  font-weight: 600;
  font-size: 40px;
  line-height: 154%;
  color: #1d1e21;
`;
export const RegisterImg = styled.img`
  position: absolute;
  top: -109px;
  right: 9px;
`;
export const RegisterTextSpan = styled.span`
  color: #59b17a;
`;
export const RegisterForm = styled(Form)`
  width: 574px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  flex-direction: column;
  gap: 62px;
`;
export const LoginForm = styled(Form)`
  width: 323px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  flex-direction: column;
  gap: 62px;
`;
export const RegisterFieldDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;
export const LogFieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const RegisterField = styled(Field)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 280px;
  height: 44px;
  background: #fff;
  padding: 0 18px;
`;

export const RegisterButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  align-items: center;
  gap: 14px;
`;
export const RegisterButton = styled.button`
  border-radius: 60px;
  border: none;
  width: 280px;
  height: 44px;
  background: #59b17a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const LogInSpan = styled.span`
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
export const Error = styled(ErrorMessage)`
  color: red;
`;
