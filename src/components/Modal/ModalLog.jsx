import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrorMessage,
  ModalBackground,
  ModalLogButton,
  ModalLogCloseSvg,
  ModalLogField,
  ModalLogForm,
  ModalLogH3,
  ModalLogSpan,
  ModallogContainer,
} from './ModalLog.styled';
import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/operation';
import sprite from '../../img/sprite.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback, useEffect } from 'react';

const validationLogSchema = Yup.object({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'The password must contain at least 6 characters'),
});

const ModalLog = ({ close, openReg }) => {
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

  const handleLogSubmit = async values => {
    const res = await dispatch(logIn(values));

    if (res.error?.message === 'Rejected') {
      toast(res.payload.message);
    } else {
      localStorage.setItem('e-pharmacy', JSON.stringify(res.payload));
      close();
    }
  };

  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  const toOpenRegisterModal = () => {
    close();
    openReg();
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <ModallogContainer>
        <ModalLogCloseSvg width="24" height="24" onClick={close}>
          <use href={`${sprite}#xB`}></use>
        </ModalLogCloseSvg>
        <ModalLogH3>Log in to your account</ModalLogH3>
        <p>Please login to your account before continuing.</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationLogSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleLogSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <ModalLogForm>
              <div>
                <ModalLogField type="email" name="email" placeholder="Email" />
                {errors.email && touched.email ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}
              </div>

              <div>
                <ModalLogField
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}
              </div>

              <ModalLogButton type="submit" disabled={isSubmitting}>
                Login
              </ModalLogButton>
            </ModalLogForm>
          )}
        </Formik>
        <p>
          Don't have an account?
          <ModalLogSpan onClick={toOpenRegisterModal}>Register</ModalLogSpan>
        </p>
      </ModallogContainer>
    </ModalBackground>
  );
};
export default ModalLog;
