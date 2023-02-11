// router/index.js
import Home from '@/views/Home'
import Detail from '@/views/Detail'
import User from '@/views/User'
import Login from '@/views/Login';
import Data from '@/views/Data';
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
      path: "/data",
      component: Data
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