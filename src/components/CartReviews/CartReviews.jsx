import {
  CartReviewsImg,
  CartReviewsLi,
  CartReviewsNameDiv,
  CartReviewsRatingDiv,
  CartReviewsTime,
  CartReviewsTopDiv,
  CartReviewsUl,
} from './CartReviews.styled';

const CartReviews = () => {
  return (
    <CartReviewsUl>
      <CartReviewsLi>
        <CartReviewsTopDiv>
          <CartReviewsNameDiv>
            <CartReviewsImg src="" alt=""></CartReviewsImg>
            <div>
              <p>Leroy Jenkins</p>
              <CartReviewsTime>2 days ago</CartReviewsTime>
            </div>
          </CartReviewsNameDiv>
          <CartReviewsRatingDiv>
            <svg width={16} height={16}></svg>
            <p>4</p>
          </CartReviewsRatingDiv>
        </CartReviewsTopDiv>
        <p>
          I've been using Moringa powder in my smoothies for a few weeks now. My
          energy levels are up, and I feel great. I followed the recommended
          dosage, and it seems to be a perfect addition to my daily routine.
          Highly recommend!
        </p>
      </CartReviewsLi>
    </CartReviewsUl>
  );
};
export default CartReviews;
