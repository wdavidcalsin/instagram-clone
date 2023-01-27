import { Layout } from '@/components';
import { ListOfRoutes } from '@/constants';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {Object.entries(ListOfRoutes).map((route, index) => (
            <Route key={index} path={route[0]} element={route[1]()} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
