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
import { useEffect, useState } from 'react';
import { getStore } from '../../redux/operation';
import { useDispatch } from 'react-redux';

const MedicineStore = () => {
  const [store, setStore] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchStore = async () => {
      const res = await dispatch(getStore());
      if (res.meta.requestStatus === 'fulfilled') {
        setStore(res.payload);
      }
    };
    fetchStore();
  }, [dispatch]);
  return (
    <MedicineStoreContainer>
      <h3>Medicine store</h3>
      <MedicineStoreUl>
        {store?.map(item => (
          <MedicineStoreLi>
            <MedicineStoreName>{item.name}</MedicineStoreName>
            <MedicineStoreAdres>
              <svg width="18" height="18">
                <use href={`${sprite}#map-pin`}></use>
              </svg>
              <Adress>{item.address}</Adress>
            </MedicineStoreAdres>
            <MedicineStoreAdres>
              <svg width="18" height="18">
                <use href={`${sprite}#phone`}></use>
              </svg>
              <p>{item.phone}</p>
            </MedicineStoreAdres>
            <MedicineStoreVisiteDiv>
              <VisiteButton>Visit Store</VisiteButton>
              <StarDiv>
                <StarNambeDiv>
                  <svg width="18" height="18">
                    <use href={`${sprite}#starY`}></use>
                  </svg>
                  <StarNumber>{item.rating}</StarNumber>
                </StarNambeDiv>
                {item.status === 'open' ? (
                  <OpenDiv>open</OpenDiv>
                ) : (
                  <CloseDiv>close</CloseDiv>
                )}
              </StarDiv>
            </MedicineStoreVisiteDiv>
          </MedicineStoreLi>
        ))}
      </MedicineStoreUl>
    </MedicineStoreContainer>
  );
};
export default MedicineStore;
