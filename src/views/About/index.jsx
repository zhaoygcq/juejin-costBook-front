import React from 'react';
import { FilePicker, Button } from 'zarm';
import Header from '@/components/Header';

import s from './style.module.less';

const About = () => {
  return <div className={s.userinfo}>
    <Header title="关于我们"></Header>
    关于我们
  </div>
};

export default About;