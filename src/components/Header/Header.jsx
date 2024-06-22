import { NavLink, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  InnerDiv,
  LoginButton,
  LogoDiv,
  LogoText,
  MidleDiv,
  NavDiv,
  NavParagraf,
  NavParagrafInner,
  RegButton,
  RegDiv,
} from './Header.styled';
// import sprite from '../../sprite.svg';
import logo from '../../img/MaskLogo.png';
import logoH from '../../img/MaskG.png';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';
  return (
    <HeaderContainer>
      <LogoDiv>
        {isHomePage ? (
          <img src={logoH} alt="Logo"></img>
        ) : (
          <img src={logo} alt="Logo"></img>
        )}

        <LogoText $isHomePage={isHomePage}>E-Pharmacy</LogoText>
      </LogoDiv>
      <NavDiv>
        <NavLink to="/home">
          <NavParagraf>
            <NavParagrafInner $isActive={location.pathname === '/home'}>
              Home
            </NavParagrafInner>
          </NavParagraf>
        </NavLink>
        <MidleDiv>
          <InnerDiv></InnerDiv>
        </MidleDiv>
        <NavLink to="/medicine-store">
          <NavParagraf>
            <NavParagrafInner
              $isActive={location.pathname === '/medicine-store'}
            >
              Medicine store
            </NavParagrafInner>
          </NavParagraf>
        </NavLink>
        <MidleDiv>
          <InnerDiv></InnerDiv>
        </MidleDiv>
        <NavLink to="/medicine">
          <NavParagraf>
            <NavParagrafInner $isActive={location.pathname === '/medicine'}>
              Medicine
            </NavParagrafInner>
          </NavParagraf>
        </NavLink>
      </NavDiv>
      <RegDiv>
        <RegButton>Register</RegButton>
        <LoginButton>Login</LoginButton>
      </RegDiv>
      {/* <div>
        <NavLink>
          <div>
             <svg width={44} height={44}>
          <use href={`${sprite}#cross-small`}></use>
        </svg>
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
