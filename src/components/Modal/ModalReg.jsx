import { Formik } from 'formik';
import {
  ErrorMessage,
  ModalBackground,
  ModalLogButton,
  ModalLogCloseSvg,
  ModalLogForm,
  ModalLogSpan,
} from './ModalLog.styled';
import {
  ModalRegContainer,
  ModalRegField,
  ModalRegH3,
} from './ModalReg.styled';
import { useCallback, useEffect } from 'react';
import sprite from '../../img/sprite.svg';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

import { registration } from '../../redux/operation';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'The Name must contain at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^[+]?[0-9]{10,15}$/,
      'The phone number must consist of numbers only'
    )
    .min(10, 'The phone number must contain at least 10 digits'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'The password must contain at least 6 characters'),
});

const ModalReg = ({ close, openLog }) => {
  const dispatch = useDispatch();

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  const handleRegSubmit = async values => {
    const res = await dispatch(registration(values));

    if (res.error?.message === 'Rejected') {
      toast(res.payload.message);
    } else {
      close();
      openLog();
    }
  };
  const toOpenLoginModal = () => {
    close();
    openLog();
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <ModalRegContainer>
        <ModalLogCloseSvg width="24" height="24" onClick={close}>
          <use href={`${sprite}#xB`}></use>
        </ModalLogCloseSvg>
        <ModalRegH3>Sign Up</ModalRegH3>
        <p>Before proceeding, please register on our site.</p>
        <Formik
          initialValues={{ name: '', email: '', phone: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleRegSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <ModalLogForm>
              <div>
                <ModalRegField
                  type="text"
                  name="name"
                  placeholder="User Name"
                />
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.name}</ErrorMessage>
                ) : null}
              </div>
              <div>
                <ModalRegField
                  type="text"
                  name="email"
                  placeholder="Email address"
                />
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}
              </div>
              <div>
                <ModalRegField
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                />
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.phone}</ErrorMessage>
                ) : null}
              </div>
              <div>
                <ModalRegField
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}
              </div>

              <ModalLogButton type="submit" disabled={isSubmitting}>
                Sign Up
              </ModalLogButton>
            </ModalLogForm>
          )}
        </Formik>
        <p>
          Already have an account?
          <ModalLogSpan onClick={toOpenLoginModal}>LogIn</ModalLogSpan>
        </p>
      </ModalRegContainer>
    </ModalBackground>
  );
};
export default ModalReg;
