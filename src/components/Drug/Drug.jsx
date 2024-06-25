import { useLocation } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Drug = ({ product }) => {
  const [activ, setActive] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [isToken, setIsToken] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const { item } = location.state || {};
  console.log(item);

  useEffect(() => {
    const storedUserData = localStorage.getItem('e-pharmacy');

    if (storedUserData && storedUserData !== '[]') {
      const isToken = JSON.parse(storedUserData);

      if (isToken.token) {
        safeToken(isToken.token);
        setIsToken(isToken.token);
      }
    }

    return;
  }, [dispatch]);

  const addQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  const minusQuantity = () => {
    setQuantity(prev => (prev === 1 ? prev : prev - 1));
  };
  const toAddToCart = async id => {
    console.log(id);

    if (isToken) {
      const res = await dispatch(updateCart({ quantity: 1, productId: id }));
      console.log(res);
      toast('The product has been added to the cart');
    } else {
      console.log('notavtoreis');
    }
  };

  return (
    <DrugContainer>
      <ToastContainer toastStyle={{ background: '#07960a', color: 'white' }} />
      <DrugCart>
        <DrugImgDiv>
          <img
            src={item.photo}
            alt={item.name}
            width="100%"
            height="100%"
          ></img>
        </DrugImgDiv>
        <DrugInfDiv>
          <DrugNameDiv>
            <p>{item.name}</p>
            <p>৳{item.price}</p>
          </DrugNameDiv>
          <DrugFirm>Brand:{item.suppliers}</DrugFirm>
          <DrugButtonsDiv>
            <PlusMinusDiv>
              <PlusMinusButton onClick={addQuantity}>+</PlusMinusButton>
              <p>1</p>
              <PlusMinusButton onClick={minusQuantity}>-</PlusMinusButton>
            </PlusMinusDiv>
            <DrugAddButton onClick={toAddToCart}>Add to cart</DrugAddButton>
          </DrugButtonsDiv>
        </DrugInfDiv>
      </DrugCart>
      <InformDiv>
        <InformButtonsDiv>
          <InformButton onClick={() => setActive('description')}>
            Description
          </InformButton>
          <InformButton onClick={() => setActive('reviews')}>
            Reviews
          </InformButton>
        </InformButtonsDiv>
        {activ === 'description' ? <Description /> : <CartReviews />}
      </InformDiv>
    </DrugContainer>
  );
};
export default Drug;
