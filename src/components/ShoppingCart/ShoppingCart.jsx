import React, { useContext } from 'react';
import { Formik } from 'formik';
import shortid from 'shortid';
import {
  FormLayout,
  FormWrapper,
  Form,
  SubmitLabel,
  SubmitInput,
  SubmitBtn,
  ErrorText,
  FormCart,
  SubmitBtnBlock,
  FormText,
} from './ShoppingCart.styled';
import { MealsContext } from 'components/App';
import { FormCard } from 'components/FormCard/FormCard';

const ShoppingCart = () => {
  const nameID = shortid.generate();
  const emailID = shortid.generate();
  const phoneID = shortid.generate();
  const adressID = shortid.generate();
  const { meals } = useContext(MealsContext);
  const totalValue = 100500
  return (
    <FormLayout>
      <FormWrapper>
        <Formik
          initialValues={{ name: '', email: '', phone: '', adress: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'This is a required field';
            }
            if (!values.email) {
              errors.email = 'This is a required field';
            }
            if (!values.phone) {
              errors.phone = 'This is a required field';
            }
            if (!values.adress) {
              errors.adress = 'This is a required field';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // Обработка отправки формы
            console.log(values);
            resetForm();

            // Установка флага isSubmitting в false после завершения отправки формы
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <SubmitLabel htmlFor={nameID}>Name:</SubmitLabel>
              <SubmitInput
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id={nameID}
                placeholder="your name"
              />
              <ErrorText>{errors.name && touched.name}</ErrorText>
              <SubmitLabel htmlFor={emailID}>Email:</SubmitLabel>
              <SubmitInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id={emailID}
                placeholder="yourEmail@mail.com"
              />
              <ErrorText>{errors.email && touched.email}</ErrorText>
              <SubmitLabel htmlFor={phoneID}>Phone:</SubmitLabel>
              <SubmitInput
                type="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                id={phoneID}
                placeholder="your phone"
              />
              <ErrorText>{errors.phone && touched.phone}</ErrorText>
              <SubmitLabel htmlFor={adressID}>Adress:</SubmitLabel>
              <SubmitInput
                type="adress"
                name="adress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.adress}
                id={adressID}
                placeholder="your adress"
              />
              <ErrorText>{errors.adress && touched.adress}</ErrorText>
              <SubmitBtnBlock>
                <FormText>
                  Total:<span>{totalValue}</span>{' '}
                </FormText>
                <SubmitBtn type="submit" disabled={isSubmitting}>
                  Submit
                </SubmitBtn>
              </SubmitBtnBlock>
            </Form>
          )}
        </Formik>
        <FormCart>
          {meals.map(meal => (
            <FormCard prop={meal} key={shortid.generate()} />
          ))}
        </FormCart>
      </FormWrapper>
    </FormLayout>
  );
};

export default ShoppingCart;
