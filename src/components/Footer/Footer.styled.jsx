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
`;
export const InnerFooterContainer = styled.div`
  margin: auto;
  width: 1202px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 768px;
    padding: 32px;
  }
`;
export const TopFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
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
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
  }
`;
