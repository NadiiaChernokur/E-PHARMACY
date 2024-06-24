import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  CartContainer,
  CartForm,
  CartFormButton,
  CartFormDiv,
  CartFormHead,
  CartInput,
  CartLabel,
  CartMain,
  CartPriceDiv,
} from './CartPage.styled';

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
            <div className="form-group">
              <CartFormHead>Payment Method</CartFormHead>
              <p>
                You can pay us in a multiple way in our payment gateway system.
              </p>
              <div role="group" aria-labelledby="paymentMethod">
                <label className="custom-radio">
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
              </div>
              {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                <div className="error">{formik.errors.paymentMethod}</div>
              ) : null}
            </div>
            <CartFormHead>Order details </CartFormHead>
            <p>
              Shipping and additionnal costs are calculated based on values you
              have entered.
            </p>
            <CartPriceDiv>
              <p>Total:</p>
              <p>৳ 122.00</p>
            </CartPriceDiv>
            <CartFormButton type="submit">Place order</CartFormButton>
          </CartForm>
        </CartFormDiv>
        <div
          style={{ width: '460px', height: '360px', background: 'pink' }}
        ></div>
      </CartMain>
    </CartContainer>
  );
};
export default CartPage;
