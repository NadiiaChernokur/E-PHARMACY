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
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getNearestStore } from '../../redux/operation';

const NearesrStore = () => {
  const dispatch = useDispatch();
  const [store, setStore] = useState([]);
  useEffect(() => {
    const fetchStore = async () => {
      const res = await dispatch(getNearestStore());
      console.log(res);
      if (res.meta.requestStatus === 'fulfilled') setStore(res.payload);
    };
    fetchStore();
  }, [dispatch]);
  return (
    <NearestStoreUl>
      {store?.map(item => (
        <NearestStoreLi key={item._id}>
          <NearestStoreName>
            <p>{item.name}</p>
            <NearestStoreOpen>
              <StarDiv>
                <svg width="16" height="16">
                  <use href={`${sprite}#starY`}></use>
                </svg>
                <StarNumber>{item.rating}</StarNumber>
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
