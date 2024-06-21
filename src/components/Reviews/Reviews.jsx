import {
  ReviewsImgDiv,
  ReviewsLi,
  ReviewsText,
  ReviewsUl,
} from './Reviews.styled';

const Reviews = () => {
  return (
    <ReviewsUl>
      <ReviewsLi>
        <ReviewsImgDiv></ReviewsImgDiv>
        <p>Maria Tkachuk</p>
        <ReviewsText>
          I recently used this medical platform to book an appointment with a
          specialist, and I was impressed by how easy and user-friendly the
          process was. Highly recommended!
        </ReviewsText>
      </ReviewsLi>
    </ReviewsUl>
  );
};
export default Reviews;
