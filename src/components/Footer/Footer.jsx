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

const Footer = () => {
  return (
    <FooterContainer>
      <InnerFooterContainer>
        <TopFooterDiv>
          <div>
            <FooterLogoDiv>
              <svg width={44} height={44}></svg>
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
            <Media></Media>
            <Media></Media>
            <Media></Media>
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
