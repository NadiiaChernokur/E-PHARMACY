import {
  AddMedicinesButton,
  AddMedicinesContainer,
  AddMedicinesImgDiv,
  AddMedicinesLeft,
  AddMedicinesParagraf,
  AddMedicinesText,
} from './AddMedicine.styled';

import { useNavigate } from 'react-router-dom';

const AddMedicine = () => {
  const navigate = useNavigate();
  const toMedicineStore = () => {
    navigate('/medicine-store');
  };
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
        <AddMedicinesButton onClick={toMedicineStore}>
          Buy medicine
        </AddMedicinesButton>
      </AddMedicinesLeft>
      <AddMedicinesImgDiv></AddMedicinesImgDiv>
    </AddMedicinesContainer>
  );
};
export default AddMedicine;
