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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1280px)',
  });

  useEffect(() => {
    const fetchStore = async () => {
      const res = await dispatch(getReviews());

      if (res.meta.requestStatus === 'fulfilled') {
        let fetchedReviews = res.payload;

        if (isMobile) {
          fetchedReviews = fetchedReviews.slice(0, 1);
        } else if (isTablet) {
          fetchedReviews = fetchedReviews.slice(0, 2);
        }
        setReviews(fetchedReviews);
      }
    };
    fetchStore();
  }, [dispatch, isMobile, isTablet]);

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
