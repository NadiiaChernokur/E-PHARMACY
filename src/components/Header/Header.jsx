import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
import { getUser, logOut, safeToken } from '../../redux/operation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isToken, setIsToken] = useState(false);
  const [userName, setUserName] = useState('');
  const [cartNamber, setCartNumber] = useState(0);
  const location = useLocation();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);
  console.log(user);
  console.log(cart.length);

  const getFirstLetter = name => {
    return name.charAt(0).toUpperCase();
  };

  useEffect(() => {
    setCartNumber(cart.length);

    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('e-pharmacy');

      if (storedUserData && storedUserData !== '[]') {
        const isToken = JSON.parse(storedUserData);
        safeToken(isToken.token);
        const res = await dispatch(getUser());
        console.log(res);
        if (res.payload._id) {
          setIsToken(true);
          setUserName(res.payload.name);
          setCartNumber(res.payload.cart.length);
        }
      }
    };
    fetchUser();
  }, [cart.length, dispatch]);

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
          <NavLink to="/cart">
            <HeaderCartDiv>
              <HeaderCartNumber>{cartNamber}</HeaderCartNumber>
              <svg width="16" height="16">
                <use href={`${sprite}#shopping-cart`}></use>
              </svg>
            </HeaderCartDiv>
          </NavLink>
          <NavLink>
            <HeaderNameDiv>
              {getFirstLetter(user?.name) || getFirstLetter(userName)}
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
