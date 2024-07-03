import {
  ButtonsDiv,
  FieldSearch,
  FieldSelector,
  FilterButton,
  FilterForm,
  MedicineAddButton,
  MedicineContainer,
  MedicineDetailsButton,
  MedicineFirm,
  MedicineH2,
  MedicineImgDiv,
  MedicineInfDiv,
  MedicineLi,
  MedicineNameDiv,
  MedicineUl,
  SearchSvg,
} from './Medicine.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../img/sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getProducts,
  safeToken,
  updateCart,
} from '../../redux/operation';
import Paginations from 'components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from 'react-responsive';
import ModalLog from 'components/Modal/ModalLog';
import ModalReg from 'components/Modal/ModalReg';
import { SpinnerInfinity } from 'spinners-react';
import { SpinerDiv } from 'components/MedicineStore/MedicineStore.styled';

const validationSchema = Yup.object({
  keyword: Yup.string(),
  category: Yup.string(),
});

const Medicine = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 1280px)',
  });
  const [options, setOptions] = useState([]);
  const [pruductArray, setProductArray] = useState([]);
  const [filter, setFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isToken, setIsToken] = useState('');
  const [limit] = useState(isTablet ? 9 : 12);
  const [isModalLogOpen, setIsModalLogOpen] = useState(false);
  const [isModalRegOpen, setIsModalRegOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeToken = useSelector(state => state.user);
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (storeToken.length === 0) {
      setIsToken('');
    } else {
      setIsToken(storeToken.token);
    }
  }, [storeToken.length, storeToken.token]);

  useEffect(() => {
    const toGetCategories = async () => {
      const categ = await dispatch(getCategories());
      const prod = await dispatch(
        getProducts({ page, limit, keyword: '', category: '' })
      );

      if (prod.meta.requestStatus === 'fulfilled') {
        setProductArray(prod.payload.products);
        setTotalPages(prod.payload.totalPages);
      }
      setOptions(categ.payload);
    };

    if (filter) {
      return;
    }
    const storedUserData = localStorage.getItem('e-pharmacy');

    if (storedUserData && storedUserData !== '[]') {
      const isToken = JSON.parse(storedUserData);

      if (isToken.token) {
        safeToken(isToken.token);
        setIsToken(isToken.token);
      }
    }

    toGetCategories();
    return;
  }, [dispatch, filter, limit, page]);

  const fetchProducts = async val => {
    const { category, keyword } = val;

    const res = await dispatch(
      getProducts({ page: 1, limit, category, keyword })
    );

    if (res.meta.requestStatus === 'fulfilled') {
      setProductArray(res.payload.products);
      setPage(1);
      setTotalPages(res.payload.totalPages);
    }
  };

  const toAddToCart = async id => {
    if (isToken) {
      await dispatch(updateCart({ quantity: 1, productId: id }));

      toast('The product has been added to the cart', {
        style: { background: '#25f41e', color: 'white' },
      });
    } else {
      setIsModalLogOpen(true);
    }
  };

  const addPage = () => {
    setPage(prev => prev + 1);
  };
  const subtractPage = () => {
    setPage(prev => prev - 1);
  };
  const firstPage = () => {
    setPage(1);
  };
  const lastPage = () => {
    setPage(totalPages);
  };

  const toProduct = item => {
    navigate('/product', { state: { item } });
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
    <MedicineContainer>
      <ToastContainer />
      <MedicineH2>Medicine</MedicineH2>
      <Formik
        initialValues={{ keyword: '', category: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setFilter(true);
          fetchProducts(values).then(() => {
            setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting, handleChange, values }) => (
          <FilterForm>
            <div>
              <FieldSelector
                as="select"
                name="category"
                onChange={handleChange}
                value={values.category}
              >
                <option value="" label="Product category" />
                {options.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </FieldSelector>
            </div>
            <div style={{ position: 'relative' }}>
              <FieldSearch
                placeholder="Search medicine"
                type="text"
                name="keyword"
              />
              <SearchSvg width="16" height="16">
                <use href={`${sprite}#search`}></use>
              </SearchSvg>
            </div>
            <div>
              <FilterButton type="submit" disabled={isSubmitting}>
                <svg width="14" height="14">
                  <use href={`${sprite}#filter`}></use>
                </svg>
                Filter
              </FilterButton>
            </div>
          </FilterForm>
        )}
      </Formik>
      <MedicineUl>
        {isLoading ? (
          <SpinerDiv>
            <SpinnerInfinity />
          </SpinerDiv>
        ) : pruductArray.length === 0 ? (
          <div>Nothing was found for your request</div>
        ) : (
          pruductArray?.map(item => (
            <MedicineLi key={item._id}>
              <MedicineImgDiv>
                <img src={item.photo} alt={item.name} width="100%"></img>
              </MedicineImgDiv>
              <MedicineInfDiv>
                <MedicineNameDiv>
                  <p>{item.name}</p>
                  <p>৳{item.price}</p>
                </MedicineNameDiv>
                <MedicineFirm>{item.suppliers}</MedicineFirm>
                <ButtonsDiv>
                  <MedicineAddButton onClick={() => toAddToCart(item._id)}>
                    Add to cart
                  </MedicineAddButton>
                  <MedicineDetailsButton onClick={() => toProduct(item)}>
                    Details
                  </MedicineDetailsButton>
                </ButtonsDiv>
              </MedicineInfDiv>
            </MedicineLi>
          ))
        )}
      </MedicineUl>
      {totalPages !== 0 && (
        <Paginations
          add={addPage}
          subtract={subtractPage}
          page={page}
          first={firstPage}
          last={lastPage}
          total={totalPages}
        />
      )}
      {isModalLogOpen && (
        <ModalLog close={toCloseLogModal} openReg={toOpenRegModal} />
      )}
      {isModalRegOpen && (
        <ModalReg close={toCloseRegModal} openLog={toOpenLogModal} />
      )}
    </MedicineContainer>
  );
};
export default Medicine;
