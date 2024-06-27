import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  CartContainer,
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
import { getProductToId, getUser, safeToken } from '../../redux/operation';
import { useDispatch } from 'react-redux';
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
  // const [isToken, setIsToken] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

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
  }, [navigate]);

  const toNewPrice = val => {
    setTotalPrice(val);
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
    onSubmit: values => {
      console.log(values);
    },
  });

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
                <div>{formik.errors.name}</div>
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
                <div>{formik.errors.email}</div>
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
                <div>{formik.errors.phone}</div>
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
                <div>{formik.errors.address}</div>
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
                  <span className="custom-radio-label">Cash On Delivery</span>
                </label>
                <label className="custom-radio">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Bank"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.paymentMethod === 'Bank'}
                  />
                  <span className="custom-radio-label">Bank</span>
                </label>
              </CartRadioDiv>
              {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                <div className="error">{formik.errors.paymentMethod}</div>
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
              <p>৳ {totalPrice}</p>
            </CartPriceDiv>
            <CartFormButton type="submit">Place order</CartFormButton>
          </CartForm>
        </CartFormDiv>

        <CartProducts priceChange={toNewPrice} />
      </CartMain>
    </CartContainer>
  );
};
export default CartPage;
