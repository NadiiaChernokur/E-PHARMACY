import styled from 'styled-components';
export const FooterContainer = styled.footer`
  background: #59b17a;
  width: 100%;
  height: 328px;
  padding: 40px 0;
  color: #f7f8fa;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    padding: 0px;
  }
  @media screen and (max-width: 767px) {
    height: 334px;
    padding: 20px;
  }
`;
export const InnerFooterContainer = styled.div`
  margin: auto;
  width: 1202px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 768px;
    padding: 32px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const TopFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 34px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: #f7f8fa;
`;
export const FooterLogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.03em;
  color: #f7f8fa;
  margin-bottom: 20px;
`;
export const FooterText = styled.p`
  width: 311px;
`;
export const MediaDiv = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const Media = styled.a`
  border: 1px solid rgba(247, 248, 250, 0.1);
  border-radius: 10px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const BottomFooterDiv = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  border-top: 1px solid rgba(247, 248, 250, 0.3);
  @media screen and (max-width: 767px) {
    padding-top: 20px;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    color: #f7f8fa;
    white-space: nowrap;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  }
`;
export const Span = styled.span`
  width: 1px;
  height: 20px;
  background: #f7f8fa;
  opacity: 0.2;
`;

export const FooterNavP = styled.p`
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const Div = styled.div`
  display: flex;
  gap: 270px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    margin-top: 40px;
  }
`;
