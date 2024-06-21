import {
  ButtonsDiv,
  MedicineAddButton,
  MedicineContainer,
  MedicineDetailsButton,
  MedicineFirm,
  MedicineImgDiv,
  MedicineInfDiv,
  MedicineLi,
  MedicineNameDiv,
  MedicineUl,
} from './Medicine.styled';

const Medicine = () => {
  return (
    <MedicineContainer>
      <h1>Medicine</h1>
      <MedicineUl>
        <MedicineLi>
          <MedicineImgDiv>
            <img src="" alt=""></img>
          </MedicineImgDiv>
          <MedicineInfDiv>
            <MedicineNameDiv>
              <p>Antimonium</p>
              <p>৳54</p>
            </MedicineNameDiv>
            <MedicineFirm>Structural (Fabrication)</MedicineFirm>
            <ButtonsDiv>
              <MedicineAddButton>Add to cart</MedicineAddButton>
              <MedicineDetailsButton>Details</MedicineDetailsButton>
            </ButtonsDiv>
          </MedicineInfDiv>
        </MedicineLi>
      </MedicineUl>
    </MedicineContainer>
  );
};
export default Medicine;
