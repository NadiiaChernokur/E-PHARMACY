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

export const ModalBurgerContainer = styled.div`
  background: #59b17a;
  width: 40%;
  height: 100%;
  margin: 0 0 0 60%;
  position: relative;
  padding: 20% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 101;
  gap: 30%;
`;
export const NavDivBurger = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegDivBurger = styled.div`
  display: flex;
  gap: 4px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const LoginButtonBurger = styled.button`
  background: none;
  border: 1px solid #59b17a;
  border-radius: 60px;
  padding: 16px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const LogoutButtonBurger = styled.button`
  background: none;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 16px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #fff;
  text-decoration: underline;
  white-space: nowrap;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const MidleDivBurger = styled.div`
  width: 14px;
  height: 4px;
  background: white;
  position: relative;
`;
export const InnerDivBurger = styled.div`
  width: 16px;
  height: 6px;
  left: -2px;
  top: -1px;
  background: white;
  position: absolute;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-left: 1px solid rgba(29, 30, 33, 0.1);
  border-right: 1px solid rgba(29, 30, 33, 0.1);
`;
export const BurgerSvg = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
`;
