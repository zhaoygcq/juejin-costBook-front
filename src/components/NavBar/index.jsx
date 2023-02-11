import React, { useState } from "react";
import PropTypes from "prop-types";
import { TabBar } from "zarm";
import { useNavigate, useLocation } from "react-router-dom";
import CustomIcon from "../CustomIcon";
import s from "./style.module.less";

const NavBar = ({ showNav }) => {
  const location = useLocation(); // 拿到 location 实例
  const { pathname } = location; // 获取当前路径
  const [activeKey, setActiveKey] = useState(pathname);
  const navigateTo = useNavigate();

  const changeTab = (path) => {
    setActiveKey(path);
    navigateTo(path);
  };

  return (
    <TabBar
      visible={showNav}
      className={s.tab}
      activeKey={activeKey}
      onChange={changeTab}
    >
      <TabBar.Item
        itemKey="/"
        title="账单"
        icon={<CustomIcon type="zhangdan" />}
      />
      <TabBar.Item
        itemKey="/data"
        title="统计"
        icon={<CustomIcon type="tongji" />}
      />
      <TabBar.Item
        itemKey="/user"
        title="我的"
        icon={<CustomIcon type="wode" />}
      />
    </TabBar>
  );
};

NavBar.propTypes = {
  showNav: PropTypes.bool,
};

export default NavBar;
