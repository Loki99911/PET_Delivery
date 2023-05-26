import styled from 'styled-components';

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

  /* @media screen and (min-width: 768px) {
    width: 425px;
    padding: 55px 85px;
    margin-top: 80px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-left: 160px;
  } */
`;
export const FormWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
`;
export const FormCart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: hidden;
  max-height: 500px;
  padding: 25px;
  border-radius: 25px;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-grow: 0;
  justify-content: flex-start;
  padding: 25px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.7);

  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
`;

export const SubmitLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-bottom: 15px;
`;

export const SubmitInput = styled.input`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  background-color: #ffffff;
  border: none;
  width: 100%;
  height: 52px;
  padding: 0 20px;
  border-radius: 5px;
  margin-bottom: 25px;
`;

export const ErrorText = styled.span`
  display: flex;
  position: absolute;
  top: 80px;

  &:last-of-type {
    top: 190px;
  }
`;

export const SubmitBtnBlock = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom:-130px;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  width: calc((100% - 30px) / 2);
  height: 100px;
  border-radius: 25px;
  background-color: rgba(255,255,255,0.7);
`;

export const SubmitBtn = styled.button`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #008000;
  transition: background-color 350ms linear;

  &:hover {
    background-color: #cc17e8;
  }
`;

export const FormText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;
