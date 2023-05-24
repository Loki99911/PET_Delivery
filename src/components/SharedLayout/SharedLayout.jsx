const { HeaderComp } = require('components/HeaderComp/HeaderComp');
const { Outlet } = require('react-router-dom');

 export const SharedLayout = () => {
  return (
    <>
      <HeaderComp />
      <Outlet />
    </>
  );
};
