import Account from './components/Account';


const routerSub = [
    {
        path: '/:profile?/:account?',
        exact : true,
        main: () => <Account />
    },
    

];
export default routerSub;