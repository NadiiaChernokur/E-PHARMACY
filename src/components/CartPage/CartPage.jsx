import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  CartContainer,
  CartError,
  CartErrorRadio,
  CartForHr,
  CartForm,
  CartFormButton,
  CartFormDiv,
  CartFormHead,
  CartInput,
  CartLabel,
  CartMain,
  CartPriceDiv,
  CartRadioDiv,
} from './CartPage.styled';
import CartProducts from 'components/CartProducts/CartProducts';
import { useEffect, useState } from 'react';
import { clearCart, safeToken, toOrder } from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone must be only digits')
    .required('Phone is required'),
  address: yup.string().required('Address is required'),
  paymentMethod: yup
    .string()
    .oneOf(['Cash On Delivery', 'Bank'], 'Invalid Payment Method')
    .required('Payment Method is required'),
});

const CartPage = () => {
  const [productArray, setProductArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const user = useSelector(state => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('e-pharmacy');

      if (storedUserData && storedUserData !== '[]') {
        const isToken = JSON.parse(storedUserData);
        safeToken(isToken.token);
      } else {
        navigate('/home');
      }
    };
    fetchUser();
  }, [navigate, user]);

  const toNewPrice = val => {
    setTotalPrice(val);
  };
  const addProdactArray = val => {
    setProductArray(val);
  };
  const toFetchForm = async (val, resetForm) => {
    const data = {
      ...val,
      totalAmount: totalPrice,
      products: [...productArray],
    };

    try {
      await dispatch(toOrder(data));

      await dispatch(clearCart());
      setTotalPrice(0);
      resetForm();
      alert('Order placed successfully and cart cleared');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      toFetchForm(values, resetForm);
    },
  });
  const formatPrice = price => {
    return price.toFixed(2);
  };

  return (
    <CartContainer>
      <h3>Cart</h3>
      <CartMain>
        <CartFormDiv>
          <CartFormHead>Enter shipping info </CartFormHead>
          <p>
            Enter your delivery address where you get the product. You can also
            send any other location where you send the products.
          </p>
          <CartForm onSubmit={formik.handleSubmit}>
            <div>
              <CartLabel>Name</CartLabel>
              <CartInput
                name="name"
                type="text"
                placeholder="Enter text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <CartError>{formik.errors.name}</CartError>
              ) : null}
            </div>

            <div>
              <CartLabel>Email</CartLabel>
              <CartInput
                name="email"
                type="email"
                placeholder="Enter text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <CartError>{formik.errors.email}</CartError>
              ) : null}
            </div>

            <div>
              <CartLabel>Phone</CartLabel>
              <CartInput
                name="phone"
                type="text"
                placeholder="Enter text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <CartError>{formik.errors.phone}</CartError>
              ) : null}
            </div>

            <div>
              <CartLabel>Address</CartLabel>
              <CartInput
                name="address"
                type="text"
                placeholder="Enter text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <CartError>{formik.errors.address}</CartError>
              ) : null}
            </div>
            <div>
              <CartForHr />
              <CartFormHead>Payment Method</CartFormHead>
              <p>
                You can pay us in a multiple way in our payment gateway system.
              </p>
              <CartRadioDiv role="group" aria-labelledby="paymentMethod">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash On Delivery"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.paymentMethod === 'Cash On Delivery'}
                  />
                  <span>Cash On Delivery</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Bank"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.paymentMethod === 'Bank'}
                  />
                  <span>Bank</span>
                </label>
              </CartRadioDiv>
              {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                <CartErrorRadio>{formik.errors.paymentMethod}</CartErrorRadio>
              ) : null}
            </div>
            <CartForHr />
            <CartFormHead>Order details </CartFormHead>
            <p>
              Shipping and additionnal costs are calculated based on values you
              have entered.
            </p>
            <CartPriceDiv>
              <p>Total:</p>
              <p>৳ {formatPrice(totalPrice)}</p>
            </CartPriceDiv>
            <CartFormButton type="submit" disabled={totalPrice === 0}>
              Place order
            </CartFormButton>
          </CartForm>
        </CartFormDiv>

        <CartProducts priceChange={toNewPrice} arr={addProdactArray} />
      </CartMain>
    </CartContainer>
  );
};
export default CartPage;
