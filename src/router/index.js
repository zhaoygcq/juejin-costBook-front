// router/index.js
import Home from '@/views/Home'
import Detail from '@/views/Detail'
import User from '@/views/User'
import Login from '@/views/Login';
import Data from '@/views/Data';
import UserInfo from '@/views/UserInfo';
import Account from '@/views/Account';
import About from '@/views/About';
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
      path: "/userinfo",
      component: UserInfo
    },
    {
      path: "/account",
      component: Account
    },
    {
      path: "/about",
      component: About
    },
    {
        path: "/login",
        component: Login
    }
  ];
  
  export default routes