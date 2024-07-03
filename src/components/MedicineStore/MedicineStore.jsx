import {
  Adress,
  CloseDiv,
  MedicineStoreAdres,
  MedicineStoreContainer,
  MedicineStoreLi,
  MedicineStoreName,
  MedicineStoreUl,
  MedicineStoreVisiteDiv,
  NameDiv,
  OpenDiv,
  SpinerDiv,
  StarDiv,
  StarDivMob,
  StarNambeDiv,
  StarNumber,
  VisiteButton,
} from './MedicineStore.styled';
import sprite from '../../img/sprite.svg';
import { useEffect, useState } from 'react';
import { getStore } from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { SpinnerInfinity } from 'spinners-react';

const MedicineStore = () => {
  const [store, setStore] = useState([]);
  const dispatch = useDispatch();
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1280px)',
  });
  const isLoading = useSelector(state => state.isLoading);

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
  const displayedMedStor = isTablet ? store.slice(0, 8) : store;
  return (
    <MedicineStoreContainer>
      <h3>Medicine store</h3>
      {isLoading ? (
        <SpinerDiv>
          <SpinnerInfinity />
        </SpinerDiv>
      ) : (
        <MedicineStoreUl>
          {displayedMedStor?.map(item => (
            <MedicineStoreLi key={item._id}>
              <NameDiv>
                <MedicineStoreName>{item.name}</MedicineStoreName>
                <StarDivMob>
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
                </StarDivMob>
              </NameDiv>
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
      )}
    </MedicineStoreContainer>
  );
};
export default MedicineStore;
