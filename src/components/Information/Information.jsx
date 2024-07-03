import {
  BottomInformationDiv,
  InformationLi,
  InformationUl,
  NumberDiv,
  ShopNow,
  TopInformationDiv,
} from './Information.styled';

const Information = () => {
  return (
    <InformationUl>
      <InformationLi>
        <TopInformationDiv>
          <NumberDiv>1</NumberDiv>
          <p>Huge Sale</p>
        </TopInformationDiv>
        <BottomInformationDiv>
          <p>70%</p>
          <ShopNow>Shop now</ShopNow>
        </BottomInformationDiv>
      </InformationLi>
      <InformationLi>
        <TopInformationDiv>
          <NumberDiv>2</NumberDiv>
          <p>Secure delivery</p>
        </TopInformationDiv>
        <BottomInformationDiv>
          <p>100%</p>
          <ShopNow>Read more</ShopNow>
        </BottomInformationDiv>
      </InformationLi>
      <InformationLi>
        <TopInformationDiv>
          <NumberDiv>3</NumberDiv>
          <p>Off</p>
        </TopInformationDiv>
        <BottomInformationDiv>
          <p>35%</p>
          <ShopNow>Shop now</ShopNow>
        </BottomInformationDiv>
      </InformationLi>
    </InformationUl>
  );
};
export default Information;
