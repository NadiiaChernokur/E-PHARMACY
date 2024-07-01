import styled from 'styled-components';
export const CartReviewsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
`;
export const CartReviewsLi = styled.li`
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  padding: 14px 28px;
  width: 720px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #6a6a6f;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 640px;
  }
  @media screen and (max-width: 767px) {
    width: 295px;
  }
`;
export const CartReviewsTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 14px;
`;
export const CartReviewsNameDiv = styled.div`
  display: flex;
  gap: 20px;
`;
export const CartReviewsImg = styled.img`
  border-radius: 30px;
  width: 44px;
  height: 44px;
  background: pink;
  object-fit: cover;
`;
export const CartReviewsTime = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.6);
`;
export const CartReviewsRatingDiv = styled.div`
  display: flex;
  gap: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
`;

export const DopDiv = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const StarSvg = styled.svg`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;
