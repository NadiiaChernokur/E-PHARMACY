import styled from 'styled-components';
export const HeaderContainer = styled.div`
  width: 1223px;
  padding: 28px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
export const LogoDiv = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
`;
export const NavDiv = styled.nav`
  display: flex;
  align-items: center;
`;
export const NavParagraf = styled.div`
  padding: 8px;
  background: white;
  border-radius: 60px;
  border: 1px solid rgba(29, 30, 33, 0.1);
`;
export const NavParagrafInner = styled.p`
  padding: 8px 20px;
  margin: 0;
  background: white;
  /* background: green; */
  border-radius: 60px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #93939a;
`;
export const MidleDiv = styled.div`
  width: 2px;
  height: 13px;
  background: white;
  position: relative;
`;
export const InnerDiv = styled.div`
  width: 4px;
  height: 12px;
  left: -2px;
  background: white;
  position: absolute;
  border-top: 1px solid rgba(29, 30, 33, 0.1);
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  border-left: 1px solid white;
  border-right: 1px solid white;
`;
export const RegDiv = styled.div`
  display: flex;
  gap: 4px;
`;
export const RegButton = styled.button`
  background: #59b17a;
  border: 1px solid rgba(241, 241, 241, 0.5);
  border-radius: 60px;
  padding: 16px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #f1f1f1;
`;
export const LoginButton = styled.button`
  background: none;
  border: 1px solid #59b17a;
  border-radius: 60px;
  padding: 16px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #59b17a;
  text-decoration: underline;
`;
