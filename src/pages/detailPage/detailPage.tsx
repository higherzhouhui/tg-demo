/* eslint-disable @typescript-eslint/no-explicit-any */
import './detailPage.scss'
import SC1 from '@/assets/sc1.png'
import SC2 from '@/assets/sc2.png'
import SC3 from '@/assets/sc3.png'
import SC4 from '@/assets/sc4.png'
import SC5 from '@/assets/sc5.png'
import SC6 from '@/assets/sc6.png'
import SC7 from '@/assets/sc7.png'
import SC8 from '@/assets/sc8.png'
import { TonConnectButton, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react'
import { ImageViewer, List, Swiper, Image } from 'antd-mobile'
import { useState } from 'react'

export const DetailPage = () => {
  const [visible, setVisible] = useState(false)
  const wallet = useTonWallet();
  const [tonConnectUI, _setOptions] = useTonConnectUI();
  const transaction: any = {
    messages: [
      {
        address: "UQATO8T4CJda7nz6mWDTI1ujIi3Q3zW5PkNgAKcG_k_Pfva5", // destination address
        amount: "2" //Toncoin in nanotons
      }
    ]
  }
  const [data, _setData] = useState<any[]>([
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
  const items = data.map((item, index) => (
    <Swiper.Item key={index} className='swiper-content' onClick={() => setVisible(true)}>
      <div
        className={'swiper-content'}
        onClick={() => {

        }}
      >
        <img src={item.img} alt='banner' />
      </div>
    </Swiper.Item>
  ))

  return <div className='detail-page'>
    <Swiper
      loop
      autoplay
      onIndexChange={i => {
        console.log(i, 'onIndexChange1')
      }}
    >
      {items}
    </Swiper>
    <div className='container'>
      <div className='price'>$<span>{data[0].price}</span></div>
      <div className='name-wrapper'>
        <div className='name'>{data[0].title}</div>
        {
          wallet?.account ?
            <div className='cart' onClick={() => tonConnectUI.sendTransaction(transaction)}>buy</div>
            : <TonConnectButton className='ton-connect-page__button' />
        }
      </div>
    </div>
    <List header='comments(99+)'>
      {users.map(user => (
        <List.Item
          key={user.name}
          prefix={
            <Image
              src={user.avatar}
              style={{ borderRadius: 20 }}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description={user.description}
        >
          {user.name}
        </List.Item>
      ))}
    </List>
    <ImageViewer.Multi
      classNames={{
        mask: 'customize-mask',
        body: 'customize-body',
      }}
      images={data.map(item => item.img)}
      visible={visible}
      onClose={() => {
        setVisible(false)
      }}
    />
  </div>
}


var users = [
  {
    id: '1',
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
  },
  {
    id: '2',
    avatar:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    name: 'Sara Koivisto',
    description: 'Animi eius expedita, explicabo',
  },
  {
    id: '3',
    avatar:
      'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Marco Gregg',
    description: 'Ab animi cumque eveniet ex harum nam odio omnis',
  },
  {
    id: '4',
    avatar:
      'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Edith Koenig',
    description: 'Commodi earum exercitationem id numquam vitae',
  },
]