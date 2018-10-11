import React from 'react';

import NotfoundPage from './pages/NotfoundPage';
//import ProfilePage from './pages/ProfilePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SingupPage';

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
    // {
    //     path: '/profile',
    //     exact : true,
    //     main : () => <ProfilePage />
    // },
    {
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    }

];
export default router;