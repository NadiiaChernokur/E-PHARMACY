import { useLocation } from 'react-router-dom';
import {
  DrugAddButton,
  DrugButtonsDiv,
  DrugCart,
  DrugContainer,
  DrugFirm,
  DrugImgDiv,
  DrugInfDiv,
  DrugNameDiv,
  InformButton,
  InformButtonsDiv,
  InformDiv,
  PlusMinusButton,
  PlusMinusDiv,
} from './Drug.styled';
import Description from 'components/Description/Description';
import CartReviews from 'components/CartReviews/CartReviews';

const Drug = ({ product }) => {
  const location = useLocation();
  const { item } = location.state || {};
  console.log(item);

  return (
    <DrugContainer>
      <DrugCart>
        <DrugImgDiv>
          <img
            src={item.photo}
            alt={item.name}
            width="100%"
            height="100%"
          ></img>
        </DrugImgDiv>
        <DrugInfDiv>
          <DrugNameDiv>
            <p>{item.name}</p>
            <p>৳{item.price}</p>
          </DrugNameDiv>
          <DrugFirm>Brand:{item.suppliers}</DrugFirm>
          <DrugButtonsDiv>
            <PlusMinusDiv>
              <PlusMinusButton>+</PlusMinusButton>
              <p>1</p>
              <PlusMinusButton>-</PlusMinusButton>
            </PlusMinusDiv>
            <DrugAddButton>Add to cart</DrugAddButton>
          </DrugButtonsDiv>
        </DrugInfDiv>
      </DrugCart>
      <InformDiv>
        <InformButtonsDiv>
          <InformButton>Description</InformButton>
          <InformButton>Reviews</InformButton>
        </InformButtonsDiv>
        {/* <Description /> */}
        <CartReviews />
      </InformDiv>
    </DrugContainer>
  );
};
export default Drug;
