import {
  Adress,
  CloseDiv,
  Name,
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
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getNearestStore } from '../../redux/operation';
import { useMediaQuery } from 'react-responsive';

const NearesrStore = () => {
  const dispatch = useDispatch();
  const [store, setStore] = useState([]);
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1280px)',
  });
  useEffect(() => {
    const fetchStore = async () => {
      const res = await dispatch(getNearestStore());

      if (res.meta.requestStatus === 'fulfilled') setStore(res.payload);
    };
    fetchStore();
  }, [dispatch]);
  const displayedStore = isTablet ? store.slice(0, 6) : store;
  return (
    <NearestStoreUl>
      {displayedStore?.map(item => (
        <NearestStoreLi key={item._id}>
          <NearestStoreName>
            <Name>{item.name}</Name>
            <NearestStoreOpen>
              <StarDiv>
                <svg width="16" height="16">
                  <use href={`${sprite}#starY`}></use>
                </svg>
                <StarNumber>{item.rating}</StarNumber>
              </StarDiv>
              {item.status === 'open' ? (
                <OpenDiv>open</OpenDiv>
              ) : (
                <CloseDiv>close</CloseDiv>
              )}
            </NearestStoreOpen>
          </NearestStoreName>
          <NearestStoreAdress>
            <NearestStoreAdressSvg>
              <svg width="18" height="18">
                <use href={`${sprite}#map-pin`}></use>
              </svg>
              <Adress>{item.address}</Adress>
            </NearestStoreAdressSvg>
            <NearestStoreAdressSvg>
              <svg width="18" height="18">
                <use href={`${sprite}#phone`}></use>
              </svg>
              <p>{item.phone}</p>
            </NearestStoreAdressSvg>
          </NearestStoreAdress>
        </NearestStoreLi>
      ))}
    </NearestStoreUl>
  );
};
export default NearesrStore;
