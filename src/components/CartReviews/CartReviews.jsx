import { RatingFive, RatingFour, RatingThree } from 'components/Rating/Rating';
import {
  CartReviewsImg,
  CartReviewsLi,
  CartReviewsNameDiv,
  CartReviewsRatingDiv,
  CartReviewsTime,
  CartReviewsTopDiv,
  CartReviewsUl,
  DopDiv,
  StarSvg,
} from './CartReviews.styled';
import sprite from '../../img/sprite.svg';

const CartReviews = () => {
  return (
    <CartReviewsUl>
      <CartReviewsLi>
        <CartReviewsTopDiv>
          <CartReviewsNameDiv>
            <CartReviewsImg
              src="https://i.pinimg.com/236x/c8/78/62/c878627eeec0b3dcd4630108ff23ccd6.jpg"
              alt="Larin Jan"
            ></CartReviewsImg>
            <div>
              <p>Larin Jan</p>
              <CartReviewsTime>2 days ago</CartReviewsTime>
            </div>
          </CartReviewsNameDiv>
          <CartReviewsRatingDiv>
            <DopDiv>
              <RatingFour />
            </DopDiv>
            <StarSvg width="18" height="18">
              <use href={`${sprite}#starY`}></use>
            </StarSvg>
            <p>4</p>
          </CartReviewsRatingDiv>
        </CartReviewsTopDiv>
        <p>
          I've been using this powder in my smoothies for a few weeks now. My
          energy levels are up, and I feel great. I followed the recommended
          dosage, and it seems to be a perfect addition to my daily routine.
          Highly recommend!
        </p>
      </CartReviewsLi>
      <CartReviewsLi>
        <CartReviewsTopDiv>
          <CartReviewsNameDiv>
            <CartReviewsImg
              src="https://i.pinimg.com/736x/94/0a/fc/940afc19cd0eb01c78904d43c2a80a8a.jpg"
              alt="Leroy Jenkins"
            ></CartReviewsImg>
            <div>
              <p>Leroy Jenkins</p>
              <CartReviewsTime>5 days ago</CartReviewsTime>
            </div>
          </CartReviewsNameDiv>
          <CartReviewsRatingDiv>
            <DopDiv>
              <RatingFive />
            </DopDiv>
            <StarSvg width="18" height="18">
              <use href={`${sprite}#starY`}></use>
            </StarSvg>
            <p>5</p>
          </CartReviewsRatingDiv>
        </CartReviewsTopDiv>
        <p>
          I tried pill capsules as part of my wellness regimen, and I've been
          pleasantly surprised by the results. My skin looks healthier, and I've
          noticed an improvement in my digestion. A natural and effective
          supplement!
        </p>
      </CartReviewsLi>
      <CartReviewsLi>
        <CartReviewsTopDiv>
          <CartReviewsNameDiv>
            <CartReviewsImg
              src="https://theperfecthumanface.wordpress.com/wp-content/uploads/2022/03/jackson-wang-face.jpg?w=620"
              alt="Omap Epps"
            ></CartReviewsImg>
            <div>
              <p>Omap Epps</p>
              <CartReviewsTime>2 weeks ago</CartReviewsTime>
            </div>
          </CartReviewsNameDiv>
          <CartReviewsRatingDiv>
            <DopDiv>
              <RatingThree />
            </DopDiv>
            <StarSvg width="18" height="18">
              <use href={`${sprite}#starY`}></use>
            </StarSvg>
            <p>3</p>
          </CartReviewsRatingDiv>
        </CartReviewsTopDiv>
        <p>
          I added this oil to my skincare routine, and the results are amazing.
          My skin feels smoother and more nourished. I was skeptical at first,
          but now I'm a firm believer in its benefits.
        </p>
      </CartReviewsLi>
    </CartReviewsUl>
  );
};
export default CartReviews;
