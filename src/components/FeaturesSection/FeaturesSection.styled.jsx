import styled from 'styled-components';
export const FeaturesSectionUl = styled.ul`
  display: flex;
  gap: 48px;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #1d1e21;
  margin-bottom: 120px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const FeaturesDiv = styled.div`
  display: flex;
  gap: 8px;
`;
