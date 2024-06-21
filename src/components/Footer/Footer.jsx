import {
  BottomFooterDiv,
  FooterContainer,
  FooterLogoDiv,
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

const Footer = () => {
  return (
    <FooterContainer>
      <InnerFooterContainer>
        <TopFooterDiv>
          <div>
            <FooterLogoDiv>
              {/* <svg width="18" height="18">
                <use href={`${sprite}#`}></use>
              </svg> */}

              <img src={logo} alt="Logo"></img>
              <p>E-Pharmacy</p>
            </FooterLogoDiv>
            <FooterText>
              Get the medicine to help you feel better, get back to your active
              life, and enjoy every moment.
            </FooterText>
          </div>
          <Nav>
            <p>Home</p>
            <p>Medicine store</p>
            <p>Medicine</p>
          </Nav>
          <MediaDiv>
            <Media>
              <svg width="28" height="28">
                <use href={`${sprite}#facebook`}></use>
              </svg>
            </Media>
            <Media>
              <svg width="28" height="28">
                <use href={`${sprite}#instagram`}></use>
              </svg>
            </Media>
            <Media>
              <svg width="28" height="28">
                <use href={`${sprite}#youtube`}></use>
              </svg>
            </Media>
          </MediaDiv>
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
