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
import { useMediaQuery } from 'react-responsive';

const Reviews = () => {
  const dispatch = useDispatch();
  const [reviews, setReviews] = useState([]);
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1280px)',
  });
  useEffect(() => {
    const fetchStore = async () => {
      const res = await dispatch(getReviews());
      console.log(res);
      if (res.meta.requestStatus === 'fulfilled') setReviews(res.payload);
    };
    fetchStore();
  }, [dispatch]);
  const displayedReviews = isTablet ? reviews.slice(0, 2) : reviews;
  return (
    <ReviewsUl>
      {displayedReviews?.map(item => (
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
