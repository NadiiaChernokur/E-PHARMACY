import { useState } from 'react';
import {
  CartButtonsDiv,
  CartProductButtonsDiv,
  CartProductImgDiv,
  CartProductInfDiv,
  CartProductLi,
  CartProductNamePrice,
  CartProductPlusMinusButton,
  CartProductRemove,
  CartProductUl,
} from './CartProducts.styled';

const CartProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const addQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  const minusQuantity = () => {
    setQuantity(prev => (prev === 1 ? prev : prev - 1));
  };
  return (
    <CartProductUl>
      <CartProductLi>
        <CartProductImgDiv>
          <img src="" alt="" width="100%" height="100%"></img>
        </CartProductImgDiv>
        <CartProductInfDiv>
          <div>
            <CartProductNamePrice>
              <p>Vitamin C Medicine</p>
              <p>৳ 90.00</p>
            </CartProductNamePrice>
            <p>Antioxidant Aid for Heart Health</p>
          </div>
          <CartButtonsDiv>
            <CartProductButtonsDiv>
              <CartProductPlusMinusButton onClick={addQuantity}>
                +
              </CartProductPlusMinusButton>
              <p>1</p>
              <CartProductPlusMinusButton onClick={minusQuantity}>
                -
              </CartProductPlusMinusButton>
            </CartProductButtonsDiv>
            <CartProductRemove>Remove</CartProductRemove>
          </CartButtonsDiv>
        </CartProductInfDiv>
      </CartProductLi>
    </CartProductUl>
  );
};
export default CartProducts;
