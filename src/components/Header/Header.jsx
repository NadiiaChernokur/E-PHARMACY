import { NavLink } from 'react-router-dom';
import {
  HeaderContainer,
  InnerDiv,
  LoginButton,
  LogoDiv,
  MidleDiv,
  NavDiv,
  NavParagraf,
  NavParagrafInner,
  RegButton,
  RegDiv,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoDiv>
        <svg width={44} height={44}></svg>
        <p>E-Pharmacy</p>
      </LogoDiv>
      <NavDiv>
        <NavParagraf>
          <NavParagrafInner>Home</NavParagrafInner>
        </NavParagraf>
        <MidleDiv>
          <InnerDiv></InnerDiv>
        </MidleDiv>
        <NavParagraf>
          <NavParagrafInner>Medicine store</NavParagrafInner>
        </NavParagraf>
        <MidleDiv>
          <InnerDiv></InnerDiv>
        </MidleDiv>
        <NavParagraf>
          <NavParagrafInner>Medicine</NavParagrafInner>
        </NavParagraf>
      </NavDiv>
      <RegDiv>
        <RegButton>Register</RegButton>
        <LoginButton>Login</LoginButton>
      </RegDiv>
      {/* <div>
        <NavLink>
          <div>
            <svg></svg>
          </div>
        </NavLink>
        <NavLink>
          <div></div>
        </NavLink>
        <NavLink>
          <button>Log out</button>
        </NavLink>
      </div> */}
    </HeaderContainer>
  );
};

export default Header;
