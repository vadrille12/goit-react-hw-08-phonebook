import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refresh } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

export function App() {
  const IsRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return IsRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
