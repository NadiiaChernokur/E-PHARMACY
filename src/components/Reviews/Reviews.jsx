import { useDispatch } from 'react-redux';
import {
  ReviewsImg,
  ReviewsImgDiv,
  ReviewsLi,
  ReviewsText,
  ReviewsUl,
} from './Reviews.styled';
import { useEffect, useState } from 'react';
import { getReviews } from '../../redux/operation';

const Reviews = () => {
  const dispatch = useDispatch();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchStore = async () => {
      const res = await dispatch(getReviews());
      console.log(res);
      if (res.meta.requestStatus === 'fulfilled') setReviews(res.payload);
    };
    fetchStore();
  }, [dispatch]);
  return (
    <ReviewsUl>
      {reviews?.map(item => (
        <ReviewsLi key={item._id}>
          <ReviewsImgDiv>
            <ReviewsImg src={item.url} alt={item.name}></ReviewsImg>
          </ReviewsImgDiv>
          <p>{item.name}</p>
          <ReviewsText>{item.testimonial}</ReviewsText>
        </ReviewsLi>
      ))}
    </ReviewsUl>
  );
};
export default Reviews;
