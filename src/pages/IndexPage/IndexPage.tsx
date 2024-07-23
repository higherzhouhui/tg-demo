/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfiniteScroll, List, Swiper, Tabs } from 'antd-mobile';
import { Input } from '@telegram-apps/telegram-ui'
import { Link } from '@/components/Link/Link';
import { useState, type FC } from 'react';
import './indexPage.scss'
import S1 from '@/assets/s1.png'
import S2 from '@/assets/s2.png'
import S3 from '@/assets/s3.png'
import S4 from '@/assets/s4.png'
import S5 from '@/assets/s5.png'

import SC1 from '@/assets/sc1.png'
import SC2 from '@/assets/sc2.png'
import SC3 from '@/assets/sc3.png'
import SC4 from '@/assets/sc4.png'
import SC5 from '@/assets/sc5.png'
import SC6 from '@/assets/sc6.png'
import SC7 from '@/assets/sc7.png'
import SC8 from '@/assets/sc8.png'


export const IndexPage: FC = () => {
  const [data, setData] = useState<unknown[]>([
    {
      img: SC1,
      title: 'Sheer 1001',
      price: '12'
    },
    {
      img: SC2,
      title: 'Sheer 1002',
      price: '18'
    },
    {
      img: SC3,
      title: 'Sheer 1003',
      price: '22'
    },
    {
      img: SC4,
      title: 'Sheer 1004',
      price: '32'
    },
    {
      img: SC5,
      title: 'Sheer 1005',
      price: '4'
    },
    {
      img: SC6,
      title: 'Sheer 10026',
      price: '21'
    },
    {
      img: SC7,
      title: 'Sheer 10016',
      price: '33'
    },
    {
      img: SC8,
      title: 'Sheer 10011',
      price: '17'
    },
  ])
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    const append: unknown[] = []
    setData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }
  const banners = [
    {
      img: S1,
      href: '',
    },
    {
      img: S2,
      href: '',
    },
    {
      img: S3,
      href: '',
    },
    {
      img: S4,
      href: '',
    },
    {
      img: S5,
      href: '',
    },
  ]

  const items = banners.map((item, index) => (
    <Swiper.Item key={index} className='swiper-content'>
      <div
        className={'swiper-content'}
        onClick={() => {

        }}
      >
        <img src={item.img} alt='banner' />
      </div>
    </Swiper.Item>
  ))
  const [menuList, _setMenuList] = useState([
    {
      title: 'Sheer(纱窗帘)',
      key: 'Sheer'
    },
    {
      title: 'Fabric(布艺窗帘)',
      key: 'Fabric'
    },
    {
      title: 'Wooden(木质)',
      key: 'Wooden '
    },
    {
      title: 'Metal(金属)',
      key: 'Metal '
    },
  ])
  return (
    <div className='home-page'>
      <Swiper
        loop
        autoplay
        onIndexChange={i => {
          console.log(i, 'onIndexChange1')
        }}
      >
        {items}
      </Swiper>
      <div className='search'>
        <Input placeholder='please input name/number' />
      </div>
      <div className='home-content'>
        <Tabs>
          {
            menuList.map((item) => {
              return <Tabs.Tab key={item.key} title={item.title}></Tabs.Tab>
            })
          }
        </Tabs>
      </div>
      <div className='home-container'>
        <List className='home-list'>
          {data.map((item: any, index) => (
            <List.Item key={index} className='home-list-item'>
              <Link key={index} to={`/detail?id=${index}`}>
                <div className='product-img-wrapper'>
                  <img src={item.img} alt='sheer' className='product-img' />
                </div>
                <div className='product-name'>{item.title}</div>
                <div className='product-bot'>
                  <div className='product-price'>${item.price}</div>
                  <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2355" width="20" height="20"><path d="M246.4 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" fill="#d4237a" p-id="2356"></path><path d="M716.8 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" fill="#d4237a" p-id="2357"></path><path d="M905.6 764.8l-537.6 0c-28.8 0-57.6-25.6-64-54.4l-96-566.4c-9.6-54.4-60.8-96-115.2-96l-22.4 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l22.4 0c28.8 0 57.6 25.6 64 54.4l96 566.4c9.6 54.4 60.8 96 115.2 96l537.6 0c12.8 0 25.6-12.8 25.6-25.6C931.2 777.6 921.6 764.8 905.6 764.8z" fill="#d4237a" p-id="2358"></path><path d="M880 179.2l-572.8 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l572.8 0c25.6 0 38.4 16 32 41.6l-70.4 281.6c-6.4 32-41.6 57.6-73.6 60.8l-396.8 28.8c-12.8 0-25.6 12.8-22.4 28.8 0 12.8 12.8 25.6 28.8 22.4l396.8-28.8c54.4-3.2 105.6-48 118.4-99.2l70.4-281.6C976 230.4 937.6 179.2 880 179.2z" fill="#d4237a" ></path></svg>
                </div>
              </Link>
            </List.Item>
          ))}
        </List>
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      </div>
    </div>
  );
};
