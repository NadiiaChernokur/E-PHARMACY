import styled from 'styled-components';
export const ReviewsUl = styled.ul`
  display: flex;
  gap: 28px;
`;
export const ReviewsLi = styled.li`
  border: 1px solid #f1f1f1;
  border-radius: 27px;
  /* padding: 0px 28px 40px 28px; */
  padding: 54px 28px;
  width: 382px;
  height: 232px;
  background: #fdfdfd;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #1d1e21;
  position: relative;
  @media screen and (max-width: 767px) {
    padding: 54px 0px 0px 0px;
    width: 335px;
  }
`;

export const ReviewsText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #93939a;
`;
export const ReviewsImgDiv = styled.div`
  border-radius: 100%;
  width: 72px;
  height: 72px;
  background: pink;
  position: absolute;
  top: -33px;
  overflow: hidden;
`;
export const ReviewsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
