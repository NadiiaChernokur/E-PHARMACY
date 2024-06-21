import { FeaturesDiv, FeaturesSectionUl } from './FeaturesSection.styled';
import sprite from '../../img/sprite.svg';
const FeaturesSection = () => {
  return (
    <FeaturesSectionUl>
      <FeaturesDiv>
        <svg width="20" height="20">
          <use href={`${sprite}#lightning`}></use>
        </svg>
        <p>Take user orders form online</p>
      </FeaturesDiv>
      <FeaturesDiv>
        <svg width="20" height="20">
          <use href={`${sprite}#lightning`}></use>
        </svg>
        <p>Create your shop profile</p>
      </FeaturesDiv>
      <FeaturesDiv>
        <svg width="20" height="20">
          <use href={`${sprite}#lightning`}></use>
        </svg>
        <p>Manage your store</p>
      </FeaturesDiv>
      <FeaturesDiv>
        <svg width="20" height="20">
          <use href={`${sprite}#lightning`}></use>
        </svg>
        <p>Get more orders</p>
      </FeaturesDiv>
      <FeaturesDiv>
        <svg width="20" height="20">
          <use href={`${sprite}#lightning`}></use>
        </svg>
        <p>Storage shed</p>
      </FeaturesDiv>
    </FeaturesSectionUl>
  );
};
export default FeaturesSection;
