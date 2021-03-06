import React from 'react';

import NotfoundPage from './pages/NotfoundPage';
import ProfilePage from './pages/ProfilePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SingupPage';
import HomePage from './pages/HomePage';
import Account from './components/Account';
import SearchPage from './pages/SearchPage';
import FriendPage from './pages/FriendPage';
import PostDetails from './components/PostDetail';
import Forgotpass from './components/ForgotPassPage/Forgotpass';
import ResetPassword from './components/ForgotPassPage/ResetPassword';
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
        path: '/home',
        exact : true,
        main : () => <HomePage />
    },
    {
        path: '/search',
        exact : false,
        main : () => <SearchPage />
    },
    {
        path: '/user/:id',
        exact : false,
        main : (match , history) => <FriendPage {...match} />
    },
    {
        path: '/post/:id',
        exact : false,
        main : (match , history) => <PostDetails {...match}   {...history}/>
    },
    {
        path: '/reset-pass',
        exact: true,
        main: () => <ResetPassword />
    },
    {
        path: '/forgot-pass',
        exact: true,
        main: () => <Forgotpass/>
    },
    {
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    },
    
    
];
export default router;