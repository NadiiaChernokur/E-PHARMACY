import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  BurgerMenu,
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
  RegDivTablet,
} from './Header.styled';
import sprite from '../../img/sprite.svg';
import logo from '../../img/MaskLogo.png';
import logoH from '../../img/MaskG.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logOut, safeToken } from '../../redux/operation';
import { useEffect, useState } from 'react';
import BurgerMenuModal from 'components/Modal/BurgerMenu';

const Header = () => {
  const [isToken, setIsToken] = useState(false);
  const [userName, setUserName] = useState('U');
  const [cartNamber, setCartNumber] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/home' || location.pathname === '/';
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);

  const getFirstLetter = name => {
    return name.charAt(0).toUpperCase();
  };

  useEffect(() => {
    setCartNumber(cart || '0');
    setUserName(user?.name || 'U');
  }, [cart, user]);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('e-pharmacy');

      if (storedUserData && storedUserData !== '[]') {
        const isToken = JSON.parse(storedUserData);

        await safeToken(isToken.token);
        const res = await dispatch(getUser());

        if (res.payload._id) {
          setIsToken(true);
          setUserName(res.payload.name);
          setCartNumber(res.payload.cart.length);
        }
      }
    };

    if (!user.token) {
      fetchUser();
    } else {
      setIsToken(true);
    }
  }, [cart, dispatch, user]);

  const toLogOut = async () => {
    try {
      await dispatch(logOut());

      localStorage.removeItem('e-pharmacy');
      if (location.pathname === '/cart') {
        navigate('/home');
      }
      setIsToken(false);
      setUserName('');
      setCartNumber(0);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  const toOpenModal = () => {
    setIsOpenModal(true);
  };
  const toCloseModal = () => {
    setIsOpenModal(false);
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
      <RegDivTablet>
        {!isToken ? (
          <RegDiv>
            <NavLink to="/register">
              <RegButton>Register</RegButton>
            </NavLink>
            <NavLink to="/login">
              <LoginButton $isHomePage={isHomePage}>Login</LoginButton>
            </NavLink>
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
              <HeaderNameDiv $isHomePage={isHomePage}>
                {getFirstLetter(userName)}
              </HeaderNameDiv>
            </NavLink>
            <NavLink>
              <LogoutButton onClick={toLogOut}>Log out</LogoutButton>
            </NavLink>
          </HeaderRegDiv>
        )}
        {isHomePage ? (
          <BurgerMenu onClick={toOpenModal}>
            <svg width="32" height="26">
              <use href={`${sprite}#align-justify`}></use>
            </svg>
          </BurgerMenu>
        ) : (
          <BurgerMenu onClick={toOpenModal}>
            <svg width="32" height="26">
              <use href={`${sprite}#align-justifyG`}></use>
            </svg>
          </BurgerMenu>
        )}
      </RegDivTablet>
      {isOpenModal && (
        <BurgerMenuModal close={toCloseModal} reg={isToken} logOut={toLogOut} />
      )}
    </HeaderContainer>
  );
};

export default Header;
