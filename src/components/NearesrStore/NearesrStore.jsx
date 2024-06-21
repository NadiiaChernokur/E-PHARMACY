import {
  Adress,
  CloseDiv,
  NearestStoreAdress,
  NearestStoreAdressSvg,
  NearestStoreLi,
  NearestStoreName,
  NearestStoreOpen,
  NearestStoreUl,
  OpenDiv,
  StarDiv,
  StarNumber,
} from './NearesrStore.styled';
import sprite from '../../img/sprite.svg';

const NearesrStore = () => {
  return (
    <NearestStoreUl>
      <NearestStoreLi>
        <NearestStoreName>
          <p>Huge Sale</p>
          <NearestStoreOpen>
            <StarDiv>
              <svg width="16" height="16">
                <use href={`${sprite}#starY`}></use>
              </svg>
              <StarNumber>2</StarNumber>
            </StarDiv>
            <OpenDiv>open</OpenDiv>
            {/* <CloseDiv>close</CloseDiv> */}
          </NearestStoreOpen>
        </NearestStoreName>
        <NearestStoreAdress>
          <NearestStoreAdressSvg>
            <svg width="18" height="18">
              <use href={`${sprite}#map-pin`}></use>
            </svg>
            <Adress>Albenia G83 Seoul</Adress>
          </NearestStoreAdressSvg>
          <NearestStoreAdressSvg>
            <svg width="18" height="18">
              <use href={`${sprite}#phone`}></use>
            </svg>
            <p>717-24-2429</p>
          </NearestStoreAdressSvg>
        </NearestStoreAdress>
      </NearestStoreLi>
    </NearestStoreUl>
  );
};
export default NearesrStore;
