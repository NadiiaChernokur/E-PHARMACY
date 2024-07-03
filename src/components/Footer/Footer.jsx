import {
  BottomFooterDiv,
  Div,
  FooterContainer,
  FooterLogoDiv,
  FooterNavP,
  FooterText,
  InnerFooterContainer,
  Media,
  MediaDiv,
  Nav,
  Span,
  TopFooterDiv,
} from './Footer.styled';
import sprite from '../../img/sprite.svg';
import logo from '../../img/MaskG.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <InnerFooterContainer>
        <TopFooterDiv>
          <div>
            <FooterLogoDiv>
              <img src={logo} alt="Logo"></img>
              <p>E-Pharmacy</p>
            </FooterLogoDiv>
            <FooterText>
              Get the medicine to help you feel better, get back to your active
              life, and enjoy every moment.
            </FooterText>
          </div>
          <Div>
            <Nav>
              <NavLink to="/home">
                <FooterNavP>Home</FooterNavP>
              </NavLink>
              <NavLink to="/medicine-store">
                <FooterNavP>Medicine store</FooterNavP>
              </NavLink>
              <NavLink to="/medicine">
                <FooterNavP>Medicine</FooterNavP>
              </NavLink>
            </Nav>
            <MediaDiv>
              <Media
                href="https://www.facebook.com/goITclub/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="28" height="28">
                  <use href={`${sprite}#facebook`}></use>
                </svg>
              </Media>
              <Media
                href="https://www.instagram.com/goitclub/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="28" height="28">
                  <use href={`${sprite}#instagram`}></use>
                </svg>
              </Media>
              <Media
                href="https://www.youtube.com/c/GoIT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="28" height="28">
                  <use href={`${sprite}#youtube`}></use>
                </svg>
              </Media>
            </MediaDiv>
          </Div>
        </TopFooterDiv>
        <BottomFooterDiv>
          <p>© E-Pharmacy 2023. All Rights Reserved</p>
          <Span></Span>
          <p>Privacy Policy</p>
          <Span></Span>
          <p>Terms & Conditions</p>
        </BottomFooterDiv>
      </InnerFooterContainer>
    </FooterContainer>
  );
};
export default Footer;
