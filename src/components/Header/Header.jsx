import { NavLink, useLocation } from 'react-router-dom';
import {
  HeaderCartDiv,
  HeaderCartNumber,
  HeaderContainer,
  HeaderNameDiv,
  HeaderRegDiv,
  InnerDiv,
  LoginButton,
  LogoDiv,
  LogoText,
  LogoutButton,
  MidleDiv,
  NavDiv,
  NavParagraf,
  NavParagrafInner,
  RegButton,
  RegDiv,
} from './Header.styled';
import sprite from '../../img/sprite.svg';
import logo from '../../img/MaskLogo.png';
import logoH from '../../img/MaskG.png';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, safeToken } from '../../redux/operation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isToken, setIsToken] = useState(false);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';
  const user = useSelector(state => state.logIn);
  console.log(user.user);

  const getFirstLetter = name => {
    return name.charAt(0).toUpperCase();
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem('e-pharmacy');

    if (storedUserData && storedUserData !== '[]') {
      const isToken = JSON.parse(storedUserData);
      console.log(isToken);
      if (isToken.token) {
        safeToken(isToken.token);
        setIsToken(true);
        setUserName(isToken.user.name);
      }
    }

    return;
  }, []);

  const toLogOut = async () => {
    const res = await dispatch(logOut());
    console.log(res);
  };
  return (
    <HeaderContainer>
      <NavLink to="/home">
        <LogoDiv>
          {isHomePage ? (
            <img src={logoH} alt="Logo"></img>
          ) : (
            <img src={logo} alt="Logo"></img>
          )}

          <LogoText $isHomePage={isHomePage}>E-Pharmacy</LogoText>
        </LogoDiv>
      </NavLink>
      {location.pathname !== '/register' && location.pathname !== '/login' && (
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
              <NavParagrafInner
                $isActive={
                  location.pathname === '/medicine' ||
                  location.pathname === '/product'
                }
              >
                Medicine
              </NavParagrafInner>
            </NavParagraf>
          </NavLink>
        </NavDiv>
      )}
      {!isToken ? (
        <RegDiv>
          <NavLink to="/register">
            <RegButton>Register</RegButton>
          </NavLink>
          <LoginButton $isHomePage={isHomePage}>Login</LoginButton>
        </RegDiv>
      ) : (
        <HeaderRegDiv>
          <NavLink>
            <HeaderCartDiv>
              <HeaderCartNumber>0</HeaderCartNumber>
              <svg width="16" height="16">
                <use href={`${sprite}#shopping-cart`}></use>
              </svg>
            </HeaderCartDiv>
          </NavLink>
          <NavLink>
            <HeaderNameDiv>
              {getFirstLetter(user.user.name) || getFirstLetter(userName)}
            </HeaderNameDiv>
          </NavLink>
          <NavLink>
            <LogoutButton onClick={toLogOut}>Log out</LogoutButton>
          </NavLink>
        </HeaderRegDiv>
      )}
    </HeaderContainer>
  );
};

export default Header;
