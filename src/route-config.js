import React from 'react';

import NotfoundPage from './pages/NotfoundPage';
import ProfilePage from './pages/ProfilePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SingupPage';
import HomePage from './pages/HomePage';
import Account from './components/Account';
const router = [
    {
        path: '/signin',
        exact : true,
        main: () => <SigninPage />
    },
    {
        path: '/signup',
        exact : true,
        main: () => <SignupPage />
    },
    {
        path: '/profile',
        exact : false,
        main : ({match, location}) => <ProfilePage match={match} location={location} />,
        router: [
            {
              path: "/profile/account",
              component: <Account/>
            }
          ]
    },
    {
        path: '',
        exact: false,
        main: () => <NotfoundPage />
    },
    {
        path: '/home',
        exact : true,
        main : () => <HomePage />
    },

];
export default router;