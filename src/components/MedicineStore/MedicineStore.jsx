import {
  Adress,
  CloseDiv,
  MedicineStoreAdres,
  MedicineStoreContainer,
  MedicineStoreLi,
  MedicineStoreName,
  MedicineStoreUl,
  MedicineStoreVisiteDiv,
  OpenDiv,
  StarDiv,
  StarNambeDiv,
  StarNamber,
  StarNumber,
  VisiteButton,
} from './MedicineStore.styled';
import sprite from '../../img/sprite.svg';

const MedicineStore = () => {
  return (
    <MedicineStoreContainer>
      <h3>Medicine store</h3>
      <MedicineStoreUl>
        <MedicineStoreLi>
          <MedicineStoreName>Huge Sale</MedicineStoreName>
          <MedicineStoreAdres>
            <svg width="18" height="18">
              <use href={`${sprite}#map-pin`}></use>
            </svg>
            <Adress>Albenia G83 Seoul</Adress>
          </MedicineStoreAdres>
          <MedicineStoreAdres>
            <svg width="18" height="18">
              <use href={`${sprite}#phone`}></use>
            </svg>
            <p>717-24-2429</p>
          </MedicineStoreAdres>
          <MedicineStoreVisiteDiv>
            <VisiteButton>Visit Store</VisiteButton>
            <StarDiv>
              <StarNambeDiv>
                <svg width="18" height="18">
                  <use href={`${sprite}#starY`}></use>
                </svg>
                <StarNumber>2</StarNumber>
              </StarNambeDiv>
              <OpenDiv>open</OpenDiv>
              {/* <CloseDiv>close</CloseDiv> */}
            </StarDiv>
          </MedicineStoreVisiteDiv>
        </MedicineStoreLi>
      </MedicineStoreUl>
    </MedicineStoreContainer>
  );
};
export default MedicineStore;
