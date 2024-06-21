import {
  ButtonsDiv,
  FieldSearch,
  FieldSelector,
  FilterButton,
  FilterForm,
  FilterSelector,
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
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../img/sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories, getProducts } from '../../redux/operation';

const validationSchema = Yup.object({
  keyword: Yup.string(),
  category: Yup.string(),
});

const Medicine = () => {
  const [options, setOptions] = useState([]);
  const [pruductArray, setProductArray] = useState([]);
  const [filterArray, setFilterArray] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const dispatch = useDispatch();
  useEffect(() => {
    const toGetCategories = async () => {
      const categ = await dispatch(getCategories());
      const prod = await dispatch(
        getProducts({ page, limit, keyword: '', category: '' })
      );
      console.log(prod);
      if (prod.meta.requestStatus === 'fulfilled') {
        setProductArray(prod.payload);
      }
      setOptions(categ.payload);
    };
    toGetCategories();
    return;
  }, [dispatch, limit, page]);
  const fetchProducts = async val => {
    console.log(val);
    const { category, keyword } = val;
    console.log(category);
    const res = await dispatch(getProducts({ page, limit, category, keyword }));
    console.log(res);
    if (res.meta.requestStatus === 'fulfilled') {
      setProductArray(res.payload);
    }
  };

  return (
    <MedicineContainer>
      <MedicineH2>Medicine</MedicineH2>
      <Formik
        initialValues={{ keyword: '', category: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Форма відправлена з такими значеннями:', values);
          //   setSubmitting(false);
          //   fetchProducts(values);
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
        {pruductArray?.map(item => (
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
                <MedicineAddButton>Add to cart</MedicineAddButton>
                <MedicineDetailsButton>Details</MedicineDetailsButton>
              </ButtonsDiv>
            </MedicineInfDiv>
          </MedicineLi>
        ))}
      </MedicineUl>
    </MedicineContainer>
  );
};
export default Medicine;
