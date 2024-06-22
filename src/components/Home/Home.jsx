import Information from 'components/Information/Information';
import {
  HomeContainer,
  HomeMain,
  HomeMainImg,
  HomeMainText,
  HomeReviews,
  HomeReviewsText,
  HomeSearch,
  HomeStores,
  HomeText,
} from './Home.styled';
import NearesrStore from 'components/NearesrStore/NearesrStore';
import AddMedicine from 'components/AddMedicine/AddMedicine';
import FeaturesSection from 'components/FeaturesSection/FeaturesSection';
import Reviews from 'components/Reviews/Reviews';
import photo from '../../img/IMG.png';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HomeContainer>
      <HomeMain>
        <div style={{ position: 'relative' }}>
          <HomeMainImg src={photo} alt="Pills"></HomeMainImg>
          <HomeMainText>Your medication delivered</HomeMainText>
          <HomeText>
            Say goodbye to all your healthcare worries with us
          </HomeText>
        </div>
      </HomeMain>
      <Information />
      <HomeStores>Your Nearest Medicine Store</HomeStores>
      <HomeSearch>Search for Medicine, Filter by your location</HomeSearch>
      <NearesrStore />
      <AddMedicine />
      <FeaturesSection />
      <HomeReviews>Reviews</HomeReviews>
      <HomeReviewsText>
        Search for Medicine, Filter by your location
      </HomeReviewsText>
      <Reviews />
    </HomeContainer>
  );
};
export default Home;
