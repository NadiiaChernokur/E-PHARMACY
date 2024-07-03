import {
  NavParagraf,
  NavParagrafInner,
  RegButton,
} from 'components/Header/Header.styled';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  BurgerSvg,
  InnerDivBurger,
  LoginButtonBurger,
  LogoutButtonBurger,
  MidleDivBurger,
  ModalBackground,
  ModalBurgerContainer,
  NavDivBurger,
  RegDivBurger,
} from './BurgerMenu.styled';
import { useCallback, useEffect, useState } from 'react';
import sprite from '../../img/sprite.svg';

const BurgerMenuModal = ({ close, reg, logOut }) => {
  const [isRegistr, setIsRegister] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );
  useEffect(() => {
    setIsRegister(reg);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, reg]);

  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  const toNavigate = to => {
    navigate(`/${to}`);
    close();
  };
  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalBurgerContainer>
        <BurgerSvg width="32" height="32" onClick={close}>
          <use href={`${sprite}#x`}></use>
        </BurgerSvg>
        <NavDivBurger>
          <NavLink to="/home">
            <NavParagraf>
              <NavParagrafInner $isActive={location.pathname === '/home'}>
                Home
              </NavParagrafInner>
            </NavParagraf>
          </NavLink>
          <MidleDivBurger>
            <InnerDivBurger></InnerDivBurger>
          </MidleDivBurger>
          <NavLink to="/medicine-store">
            <NavParagraf>
              <NavParagrafInner
                $isActive={location.pathname === '/medicine-store'}
              >
                Medicine store
              </NavParagrafInner>
            </NavParagraf>
          </NavLink>
          <MidleDivBurger>
            <InnerDivBurger></InnerDivBurger>
          </MidleDivBurger>
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
        </NavDivBurger>

        <RegDivBurger>
          {!isRegistr ? (
            <>
              <NavLink to="/register">
                <RegButton onClick={() => toNavigate('register')}>
                  Register
                </RegButton>
              </NavLink>
              <NavLink to="/login">
                <LoginButtonBurger onClick={() => toNavigate('login')}>
                  Login
                </LoginButtonBurger>
              </NavLink>{' '}
            </>
          ) : (
            <NavLink to="/login">
              <LogoutButtonBurger onClick={logOut}>Log out</LogoutButtonBurger>
            </NavLink>
          )}
        </RegDivBurger>
      </ModalBurgerContainer>
    </ModalBackground>
  );
};
export default BurgerMenuModal;
