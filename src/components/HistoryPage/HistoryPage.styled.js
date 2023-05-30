import styled from 'styled-components';

export const HistoryLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
`;
export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.7);
`;
export const HistoryCart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-grow: 1;
  overflow-y: hidden;
  width: 100%;
  padding: 25px;
  border-radius: 25px;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const HistoryLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-bottom: 15px;
`;

export const HistoryInput = styled.input`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  background-color: #ffffff;
  border: none;
  width: 40%;
  height: 52px;
  padding: 0 20px;
  border-radius: 5px;
  margin-bottom: 25px;
`;

// export const FormText = styled.p`
//   font-weight: 400;
//   font-size: 24px;
//   line-height: 1.16;
//   letter-spacing: 0.04em;
// `;

// export const FormCardWrapper = styled.li`
//   list-style: none;
//   display: flex;
//   position: relative;
//   align-items: center;
//   gap: 5px;
//   padding: 10px;
//   border: 1px solid green;
//   border-radius: 5px;
//   background-color: #ffffff;
// `;

// export const FormCardImg = styled.img`
//   display: inline-block;
//   width: 200px;
// `;

// export const FormCardTitle = styled.p``;
// export const FormCardInputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   padding: 10px;
// `;

// export const FormCardInput = styled.input`
//   width: 100%;
//   max-width: 200px;
//   margin-top: 30px;
// `;

// export const FormCardDelBtn = styled.button`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 5px;
//   right: 5px;
//   width: 30px;
//   height: 30px;
//   padding: 0;
//   border: none;
//   border-radius: 5px;
//   background-color: #ffffff;
//   transition: background-color 300ms linear;
//   &:hover {
//     background-color: #cc17e8;
//   }
// `;
