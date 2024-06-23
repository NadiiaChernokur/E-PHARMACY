import {
  DescriptionContainer,
  DescriptionSpan,
  DescriptionText,
} from './Description.styled';

const Description = () => {
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
        Moringa is packed with antioxidants that help fight oxidative stress and
        inflammation in the body.
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Anti-Diabetic Effects:</DescriptionSpan>
        Some studies have shown that moringa leaves might lower blood sugar
        levels, making it a valuable supplement for managing diabetes.
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Heart Health:</DescriptionSpan>
        The plant has been linked to reduced cholesterol levels, which is vital
        for heart health.
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Anti-Cancer Properties:</DescriptionSpan>
        Certain compounds in moringa, such as niazimicin, have been found to
        suppress the growth of cancer cells in laboratory studies.
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Immune Support:</DescriptionSpan>
        With its high vitamin C content, moringa can boost the immune system.
      </DescriptionText>
      <DescriptionText>
        <DescriptionSpan>Digestive Aid:</DescriptionSpan>
        Moringa can help in treating digestive disorders due to its
        anti-inflammatory properties.
      </DescriptionText>
    </DescriptionContainer>
  );
};
export default Description;
