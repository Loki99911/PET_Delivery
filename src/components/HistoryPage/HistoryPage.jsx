import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import {
  HistoryLayout,
  HistoryLabel,
  HistoryInput,
  HistoryWrapper,
  HistoryCart,
} from './HistoryPage.styled';
import axios from 'axios';
import { HistoryCard } from 'components/HistoryCard/HistoryCard';

const HistoryPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orders, setOrders] = useState([]);
  const [filtredOrders, setFiltredOrders] = useState([]);

  useEffect(() => {
    axios
      .get('/api/history')
      .then(function (response) {
        setOrders(response.data.data.result);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  useEffect(() => {
    if (email) {
      const sortByMail = orders.filter(el => el.email.includes(email));
      return setFiltredOrders(sortByMail);
    }
    if (phone) {
      const sortByPhone = orders.filter(el => el.phone.includes(phone));
      return setFiltredOrders(sortByPhone);
    }
    return setFiltredOrders(orders);
  }, [phone, email, orders]);

  return (
    <HistoryLayout>
      <HistoryWrapper>
        <HistoryLabel>Email:</HistoryLabel>
        <HistoryInput
          type="text"
          value={email}
          onChange={e => {
            setPhone("");
            setEmail(e.target.value)
          }}
        />
        <HistoryLabel>Phone:</HistoryLabel>
        <HistoryInput
          type="text"
          value={phone}
          onChange={e => {
            setEmail("");
            setPhone(e.target.value);
          }}
        />
      </HistoryWrapper>
      <HistoryCart>
        {filtredOrders.map(order => (
          <HistoryCard prop={order} key={shortid()} />
        ))}
      </HistoryCart>
    </HistoryLayout>
  );
};

export default HistoryPage;
