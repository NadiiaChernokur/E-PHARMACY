import {
  DrugAddButton,
  DrugButtonsDiv,
  DrugCart,
  DrugContainer,
  DrugFirm,
  DrugImgDiv,
  DrugInfDiv,
  DrugNameDiv,
  PlusMinusButton,
  PlusMinusDiv,
} from './Drug.styled';

const Drug = () => {
  return (
    <DrugContainer>
      <DrugCart>
        <DrugImgDiv>
          <img src="" alt=""></img>
        </DrugImgDiv>
        <DrugInfDiv>
          <DrugNameDiv>
            <p>Moringa</p>
            <p>৳470</p>
          </DrugNameDiv>
          <DrugFirm>Brand: Roofing (Asphalt)</DrugFirm>
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
      <div>
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
      </div>
    </DrugContainer>
  );
};
export default Drug;
