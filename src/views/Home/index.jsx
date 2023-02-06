import React, { useState, useEffect } from 'react'
import { Icon, Pull } from 'zarm'
import dayjs from 'dayjs'
import BillItem from '@/components/BillItem'
import { get, REFRESH_STATE, LOAD_STATE } from '@/utils' // Pull 组件需要的一些常量

import s from './style.module.less'

const Home = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format('YYYY-MM')); // 当前筛选时间
  const [page, setPage] = useState(1); // 分页
  const [list, setList] = useState([]); // 账单列表
  const [totalPage, setTotalPage] = useState(0); // 分页总数
  const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal); // 下拉刷新状态
  const [loading, setLoading] = useState(LOAD_STATE.normal); // 上拉加载状态

  useEffect(() => {
    getBillList() // 初始化
  }, [page])

  // 获取账单方法
  const getBillList = async () => {
    const { data } = await get(`/api/bill/list?page=${page}&page_size=5&date=${currentTime}`);
    // 下拉刷新，重制数据
    if (page == 1) {
      setList(data.list);
    } else {
      setList(list.concat(data.list));
    }
    setTotalPage(data.totalPage);
    // 上滑加载状态
    setLoading(LOAD_STATE.success);
    setRefreshing(REFRESH_STATE.success);
  }

  // 请求列表数据
  const refreshData = () => {
    setRefreshing(REFRESH_STATE.loading);
    if (page != 1) {
      setPage(1);
    } else {
      getBillList();
    };
  };

  const loadData = () => {
    if (page < totalPage) {
      setLoading(LOAD_STATE.loading);
      setPage(page + 1);
    }
  }

  return <div className={s.home}>
    <div className={s.header}>
      <div className={s.dataWrap}>
        <span className={s.expense}>总支出：<b>¥ 200</b></span>
        <span className={s.income}>总收入：<b>¥ 500</b></span>
      </div>
      <div className={s.typeWrap}>
        <div className={s.left}>
          <span className={s.title}>类型 <Icon className={s.arrow} type="arrow-bottom" /></span>
        </div>
        <div className={s.right}>
          <span className={s.time}>2022-06<Icon className={s.arrow} type="arrow-bottom" /></span>
        </div>
      </div>
    </div>
    <div className={s.contentWrap}>
      {
        list.length ? <Pull
          animationDuration={200}
          stayTime={400}
          refresh={{
            state: refreshing,
            handler: refreshData
          }}
          load={{
            state: loading,
            distance: 200,
            handler: loadData
          }}
        >
          {
            list.map((item, index) => <BillItem
              bill={item}
              key={index}
            />)
          }
        </Pull> : null
      }
    </div>
  </div>
}

export default Home