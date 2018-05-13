/**
 * Root
 * */
import RootRoute from './root/root';
import LandingPage from './LandingPage/LandingPage';

/**
 * Exports
 * */

const mainRoutes = [
    {
        path: '/',
        component:LandingPage,
        wrapper:''
    }
];

export{
    mainRoutes
}