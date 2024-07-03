import { useEffect, useState } from 'react';
import {
  CartButtonsDiv,
  CartEmpty,
  CartProductButtonsDiv,
  CartProductImgDiv,
  CartProductInfDiv,
  CartProductLi,
  CartProductNamePrice,
  CartProductPlusMinusButton,
  CartProductRemove,
  CartProductUl,
  DopDiv,
  DopDivHealth,
  DopDivOrder,
} from './CartProducts.styled';
import { useDispatch } from 'react-redux';
import {
  getProductToId,
  getUser,
  removeCartToId,
  safeToken,
} from '../../redux/operation';

const CartProducts = ({ priceChange, arr }) => {
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const [isToken, setIsToken] = useState(false);
  const [cartArray, setCartArray] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('e-pharmacy');

      if (storedUserData && storedUserData !== '[]') {
        const isToken = JSON.parse(storedUserData);
        safeToken(isToken.token);
        const res = await dispatch(getUser());

        if (res.payload._id) {
          setIsToken(true);
          if (res.payload.cart.length > 0) {
            const idArray = res.payload.cart.map(item => item.productId);
            const results = await dispatch(getProductToId(idArray));
            setCartArray(results.payload);
            const initialQuantities = res.payload.cart.reduce((acc, item) => {
              acc[item.productId] = item.quantity;
              return acc;
            }, {});

            setQuantities(initialQuantities);
            const productsArray = Object.keys(initialQuantities).map(
              productId => ({
                productId,
                quantity: initialQuantities[productId],
              })
            );

            arr(productsArray);

            const initialTotalPrice = results.payload.reduce((total, item) => {
              const quantity = initialQuantities[item._id] || 0;
              return total + item.price * quantity;
            }, 0);
            priceChange(initialTotalPrice);
          }
        }
      }
    };
    if (isToken) {
      return;
    }

    fetchUser();
  }, [arr, dispatch, isToken, priceChange]);

  const updateTotalPrice = newQuantities => {
    const totalPrice = cartArray.reduce((total, item) => {
      const quantity = newQuantities[item._id] || 0;
      return total + item.price * quantity;
    }, 0);
    priceChange(totalPrice);
  };

  const addQuantity = async id => {
    setQuantities(prevQuantities => {
      const newQuantities = {
        ...prevQuantities,
        [id]: (prevQuantities[id] || 1) + 1,
      };

      updateTotalPrice(newQuantities);
      const productsArray = Object.keys(newQuantities).map(productId => ({
        productId,
        quantity: newQuantities[productId],
      }));
      arr(productsArray);
      return newQuantities;
    });
  };

  const minusQuantity = id => {
    setQuantities(prevQuantities => {
      const newQuantities = {
        ...prevQuantities,
        [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
      };
      updateTotalPrice(newQuantities);
      const productsArray = Object.keys(newQuantities).map(productId => ({
        productId,
        quantity: newQuantities[productId],
      }));
      arr(productsArray);
      return newQuantities;
    });
  };

  const toRemoveProduct = async id => {
    const res = await dispatch(removeCartToId(id));

    if (res.type === 'removeCart/fulfilled') {
      setCartArray(prevCartArray =>
        prevCartArray.filter(item => item._id !== id)
      );

      setQuantities(prevQuantities => {
        const newQuantities = { ...prevQuantities };
        delete newQuantities[id];
        updateTotalPrice(newQuantities);

        const productsArray = Object.keys(newQuantities).map(productId => ({
          productId,
          quantity: newQuantities[productId],
        }));

        arr(productsArray);
        return newQuantities;
      });
    }
  };
  const formatPrice = price => {
    return price.toFixed(2);
  };

  return (
    <>
      {isToken && cartArray.length !== 0 ? (
        <CartProductUl>
          {cartArray.map(item => (
            <CartProductLi key={item._id}>
              <CartProductImgDiv>
                <img
                  src={item.photo}
                  alt={item.name}
                  width="100%"
                  height="100%"
                ></img>
              </CartProductImgDiv>
              <CartProductInfDiv>
                <DopDiv>
                  <CartProductNamePrice>
                    <p>{item.name}</p>
                    <p>
                      ৳ {formatPrice(item.price * (quantities[item._id] || 1))}
                    </p>
                  </CartProductNamePrice>
                  <p>For {item.category} Health</p>
                </DopDiv>
                <DopDivOrder>
                  <p>{item.name}</p>
                  <DopDivHealth>For {item.category} Health</DopDivHealth>
                  <p>
                    ৳ {formatPrice(item.price * (quantities[item._id] || 1))}
                  </p>
                </DopDivOrder>
                <CartButtonsDiv>
                  <CartProductButtonsDiv>
                    <CartProductPlusMinusButton
                      onClick={() => addQuantity(item._id)}
                    >
                      +
                    </CartProductPlusMinusButton>
                    <p>{quantities[item._id]}</p>
                    <CartProductPlusMinusButton
                      onClick={() => minusQuantity(item._id)}
                    >
                      -
                    </CartProductPlusMinusButton>
                  </CartProductButtonsDiv>
                  <CartProductRemove onClick={() => toRemoveProduct(item._id)}>
                    Remove
                  </CartProductRemove>
                </CartButtonsDiv>
              </CartProductInfDiv>
            </CartProductLi>
          ))}
        </CartProductUl>
      ) : (
        <CartEmpty>You don't have any saved products yet</CartEmpty>
      )}
    </>
  );
};
export default CartProducts;
