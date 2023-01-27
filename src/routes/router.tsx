import { Layout } from '@/components';
import { ListOfRoutes } from '@/constants';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {Object.entries(ListOfRoutes).map((route) => (
        <Route path={route[0]} element={route[1]()} />
      ))}
    </Routes>
  );
};

export default MainRouter;
