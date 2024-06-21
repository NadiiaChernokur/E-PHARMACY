import Information from 'components/Information/Information';
import {
  HomeContainer,
  HomeReviews,
  HomeReviewsText,
  HomeSearch,
  HomeStores,
} from './Home.styled';
import NearesrStore from 'components/NearesrStore/NearesrStore';
import AddMedicine from 'components/AddMedicine/AddMedicine';
import FeaturesSection from 'components/FeaturesSection/FeaturesSection';
import Reviews from 'components/Reviews/Reviews';

const Home = () => {
  return (
    <HomeContainer>
      {/* <div>
        <p>Your medication delivered</p>
        <p>Say goodbye to all your healthcare worries with us</p>
      </div> */}
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
