import { useLocation, useNavigate } from 'react-router-dom';
import {
  DrugAddButton,
  DrugButtonsDiv,
  DrugCart,
  DrugContainer,
  DrugFirm,
  DrugImgDiv,
  DrugInfDiv,
  DrugNameDiv,
  InformButton,
  InformButtonsDiv,
  InformDiv,
  PlusMinusButton,
  PlusMinusDiv,
} from './Drug.styled';
import Description from 'components/Description/Description';
import CartReviews from 'components/CartReviews/CartReviews';
import { useEffect, useState } from 'react';
import { safeToken, updateCart } from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalLog from 'components/Modal/ModalLog';
import ModalReg from 'components/Modal/ModalReg';

const Drug = () => {
  const [activ, setActive] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [isToken, setIsToken] = useState('');
  const [isModalLogOpen, setIsModalLogOpen] = useState(false);
  const [isModalRegOpen, setIsModalRegOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};
  const storeToken = useSelector(state => state.user);

  useEffect(() => {
    if (storeToken.length === 0) {
      setIsToken('');
    } else {
      setIsToken(storeToken.token);
    }
  }, [storeToken.length, storeToken.token]);

  useEffect(() => {
    if (!item) {
      navigate('/medicine');
      return;
    }
    setPrice(item.price);
    const storedUserData = localStorage.getItem('e-pharmacy');

    if (storedUserData && storedUserData !== '[]') {
      const isToken = JSON.parse(storedUserData);

      if (isToken.token) {
        safeToken(isToken.token);
        setIsToken(isToken.token);
      }
    }

    return;
  }, [item, navigate]);

  const addQuantity = () => {
    setQuantity(prev => prev + 1);
    setPrice(prev => parseFloat((prev + item.price).toFixed(2)));
  };
  const minusQuantity = () => {
    if (quantity === 1) return;
    setQuantity(prev => prev - 1);
    setPrice(prev => parseFloat((prev - item.price).toFixed(2)));
  };

  const toAddToCart = async id => {
    if (isToken) {
      const res = await dispatch(updateCart({ quantity, productId: id }));

      if (res.type === 'updateToCart/fulfilled') {
        navigate('/cart');
      }
    } else {
      setIsModalLogOpen(true);
    }
  };
  const toOpenLogModal = () => {
    setIsModalLogOpen(true);
  };
  const toCloseLogModal = () => {
    setIsModalLogOpen(false);
  };
  const toOpenRegModal = () => {
    setIsModalRegOpen(true);
  };
  const toCloseRegModal = () => {
    setIsModalRegOpen(false);
  };

  return (
    <DrugContainer>
      <ToastContainer toastStyle={{ background: '#fb430b', color: 'white' }} />
      <DrugCart>
        <DrugImgDiv>
          <img
            src={item?.photo}
            alt={item?.name}
            width="100%"
            height="100%"
          ></img>
        </DrugImgDiv>
        <DrugInfDiv>
          <DrugNameDiv>
            <p>{item?.name}</p>
            <p>৳{price?.toFixed(2)}</p>
          </DrugNameDiv>
          <DrugFirm>Brand:{item?.suppliers}</DrugFirm>
          <DrugButtonsDiv>
            <PlusMinusDiv>
              <PlusMinusButton onClick={addQuantity}>+</PlusMinusButton>
              <p>{quantity}</p>
              <PlusMinusButton onClick={minusQuantity}>-</PlusMinusButton>
            </PlusMinusDiv>
            <DrugAddButton onClick={() => toAddToCart(item._id)}>
              Add to cart
            </DrugAddButton>
          </DrugButtonsDiv>
        </DrugInfDiv>
      </DrugCart>
      <InformDiv>
        <InformButtonsDiv>
          <InformButton
            onClick={() => setActive('description')}
            $prop={activ === 'description'}
          >
            Description
          </InformButton>
          <InformButton
            onClick={() => setActive('reviews')}
            $prop={activ === 'reviews'}
          >
            Reviews
          </InformButton>
        </InformButtonsDiv>
        {activ === 'description' ? (
          <Description prod={item} />
        ) : (
          <CartReviews />
        )}
      </InformDiv>
      {isModalLogOpen && (
        <ModalLog close={toCloseLogModal} openReg={toOpenRegModal} />
      )}
      {isModalRegOpen && (
        <ModalReg close={toCloseRegModal} openLog={toOpenLogModal} />
      )}
    </DrugContainer>
  );
};
export default Drug;
