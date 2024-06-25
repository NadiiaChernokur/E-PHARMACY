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
              <CartProductPlusMinusButton>+</CartProductPlusMinusButton>
              <p>1</p>
              <CartProductPlusMinusButton>-</CartProductPlusMinusButton>
            </CartProductButtonsDiv>
            <CartProductRemove>Remove</CartProductRemove>
          </CartButtonsDiv>
        </CartProductInfDiv>
      </CartProductLi>
    </CartProductUl>
  );
};
export default CartProducts;
