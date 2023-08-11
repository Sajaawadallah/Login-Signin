
import { Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import { PATHS } from './paths'
import Gured from '../components/Gureds/Gured';









export const routes = [

  {
    path: PATHS.HOME,

    element: <Gured ><HomePage /></Gured>
  },
  {
    path: PATHS.PROFILE,
    element: <Login />,
  },

  {
    path: PATHS.USERS,
    element: <Login />,
  },
  {
    path: PATHS.LOGIN,
    element: <Login />,
  },

  {
    path: PATHS.SINGIN,
    element: <Signin />,
  },

  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page not found 404</h1>,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];