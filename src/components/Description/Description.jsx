import {
  DescriptionContainer,
  DescriptionSpan,
  DescriptionText,
} from './Description.styled';

const Description = ({ prod }) => {
  return (
    <DescriptionContainer>
      <p>
        Although it's typically considered safe, excessive consumption can lead
        to side effects. Therefore, it's recommended to consult a healthcare
        professional before using moringa, especially if you're pregnant,
        nursing, or taking other medications. This balanced approach allows for
        the benefits of moringa while recognizing the importance of proper usage
        and caution.
      </p>
      <DescriptionText>
        <DescriptionSpan>
          Medicinal Uses: Antioxidant Properties:
        </DescriptionSpan>
        {prod.uses}
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Anti-Diabetic Effects:</DescriptionSpan>
        {prod.effects}
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Heart Health:</DescriptionSpan>
        {prod.health}
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Anti-Cancer Properties:</DescriptionSpan>
        {prod.properties}
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Immune Support:</DescriptionSpan>
        {prod.support}
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Digestive Aid:</DescriptionSpan>
        {prod.aid}
      </DescriptionText>
    </DescriptionContainer>
  );
};
export default Description;
