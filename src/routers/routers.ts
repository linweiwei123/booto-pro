import User from '../views/pages/User/User';
import Home from '../views/pages/Home/Home';

export const routes = [
  {
    path: '/',
    component: Home,
    options: {
      exact: true
    }
  },
  {
    path: '/user',
    component: User,
  },
];
