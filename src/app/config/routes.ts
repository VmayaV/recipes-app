
import IRoute from '../interfaces/route';
import HomePage from '../pages/Home';
import Details from '../pages/Details';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/details/:id',
        name: 'About Page',
        component: Details,
        exact: true
    },
    {
        path: '*',
        name: 'Not Found',
        component: Details,
    }]

export default routes;