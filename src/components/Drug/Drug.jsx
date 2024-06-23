import { useLocation, useParams } from 'react-router-dom';
import {
  DrugAddButton,
  DrugButtonsDiv,
  DrugCart,
  DrugContainer,
  DrugFirm,
  DrugImgDiv,
  DrugInfDiv,
  DrugNameDiv,
  InformDiv,
  PlusMinusButton,
  PlusMinusDiv,
} from './Drug.styled';

const Drug = ({ product }) => {
  const location = useLocation();
  const { item } = location.state || {};
  console.log(item);

  return (
    <DrugContainer>
      <DrugCart>
        <DrugImgDiv>
          <img src={item.photo} alt={item.name} width="100%"></img>
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
        <div>
          <button>Description</button>
          <button>Reviews</button>
        </div>
        <div>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
        </div>
      </InformDiv>
    </DrugContainer>
  );
};
export default Drug;
