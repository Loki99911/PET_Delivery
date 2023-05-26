import { HeaderComp } from 'components/HeaderComp/HeaderComp';
import { Outlet } from 'react-router-dom';
import { MainWrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <HeaderComp />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </>
  );
};
