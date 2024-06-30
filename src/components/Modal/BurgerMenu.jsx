import {
  InnerDiv,
  LoginButton,
  MidleDiv,
  NavParagraf,
  NavParagrafInner,
  RegButton,
} from 'components/Header/Header.styled';
import { NavLink, useLocation } from 'react-router-dom';
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
import { useCallback, useEffect } from 'react';
import sprite from '../../img/sprite.svg';

const BurgerMenuModal = ({ close, reg }) => {
  const location = useLocation();
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalBurgerContainer>
        <BurgerSvg width="32" height="32">
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
          {!reg ? (
            <>
              <NavLink to="/register">
                <RegButton>Register</RegButton>
              </NavLink>
              <NavLink to="/login">
                <LoginButtonBurger>Login</LoginButtonBurger>
              </NavLink>{' '}
            </>
          ) : (
            <NavLink to="/login">
              <LogoutButtonBurger>Log out</LogoutButtonBurger>
            </NavLink>
          )}
        </RegDivBurger>
      </ModalBurgerContainer>
    </ModalBackground>
  );
};
export default BurgerMenuModal;
