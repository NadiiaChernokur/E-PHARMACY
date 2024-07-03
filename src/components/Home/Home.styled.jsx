import styled from 'styled-components';
export const HomeContainer = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -104px;
`;
export const HomeMain = styled.div`
  width: 100%;
  height: 800px;
  background: #59b17a;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 64px;
  @media screen and (max-width: 767px) {
    height: 812px;
  }
`;
export const HomeMainText = styled.p`
  width: 609px;
  font-weight: 600;
  font-size: 74px;
  line-height: 100%;
  color: #fff;
  text-shadow: 0 4px 85px 0 rgba(29, 30, 33, 0.3);
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 767px) {
    width: 331px;
    font-size: 50px;
  }
`;
export const HomeMainImg = styled.img`
  position: absolute;
  bottom: -146px;
  right: -76px;
  @media screen and (max-width: 767px) {
    bottom: -84px;
    right: -61px;
    width: 451px;
  }
`;

export const HomeText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #fff;
  width: 207px;
  position: relative;
  right: -355px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 133%;
    right: -166px;
    width: 156px;
  }
`;
export const HomeStores = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  text-align: center;
  color: #1d1e21;
  margin: 0;
  margin-bottom: 14px;
`;
export const HomeSearch = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #93939a;
  margin-bottom: 64px;
`;
export const HomeReviews = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  text-align: center;
  color: #1d1e21;
  margin-bottom: 14px;
`;
export const HomeReviewsText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #93939a;
  margin-bottom: 88px;
`;
