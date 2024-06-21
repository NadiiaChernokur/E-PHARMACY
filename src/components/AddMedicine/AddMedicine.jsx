import {
  AddMedicinesButton,
  AddMedicinesContainer,
  AddMedicinesLeft,
  AddMedicinesParagraf,
  AddMedicinesText,
} from './AddMedicine.styled';

const AddMedicine = () => {
  return (
    <AddMedicinesContainer>
      <AddMedicinesLeft>
        <AddMedicinesParagraf>
          Add the medicines you need online now
        </AddMedicinesParagraf>
        <AddMedicinesText>
          Enjoy the convenience of having your prescriptions filled from home by
          connecting with your community pharmacy through our online platform.
        </AddMedicinesText>
        <AddMedicinesButton>Buy medicine</AddMedicinesButton>
      </AddMedicinesLeft>
      <div></div>
    </AddMedicinesContainer>
  );
};
export default AddMedicine;
