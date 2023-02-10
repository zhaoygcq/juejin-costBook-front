// router/index.js
import Home from '@/views/Home'
import Detail from '@/views/Detail'
import User from '@/views/User'
import Login from '../views/Login';
const routes = [
    {
      path: "/",
      component: Home
    },
    {
      path: "/detail",
      component: Detail
    },
    {
      path: "/user",
      component: User
    },
    {
        path: "/login",
        component: Login
    }
  ];
  
  export default routes