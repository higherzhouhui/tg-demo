/* eslint-disable @typescript-eslint/no-explicit-any */
import './myPage.scss'
import { Avatar, Divider, List } from 'antd-mobile'
import avatarIcon from '@/assets/logo.jpg'
import { initInitData } from '@telegram-apps/sdk';
import { TonConnectButton } from '@tonconnect/ui-react';
import { UnorderedListOutline, PayCircleOutline, SetOutline } from 'antd-mobile-icons';
import WebApp from '@twa-dev/sdk';

export const MyPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const initData = initInitData() as any;
  return <div className='my-page'>
    <div className='name-wrapper'>
      <Avatar src={avatarIcon} style={{ '--border-radius': '50%' }} />
      <span>{initData?.user?.username}</span>
    </div>
    <Divider />
    <TonConnectButton className='ton-connect-page__button' />
    <Divider />
    <List>
      <List.Item prefix={<PayCircleOutline />} onClick={() => { WebApp.showAlert('coming soon') }}>
        总资产
      </List.Item>
      <List.Item prefix={<UnorderedListOutline />} onClick={() => { WebApp.showAlert('coming soon') }}>
        账单
      </List.Item>
      <List.Item prefix={<SetOutline />} onClick={() => { WebApp.showAlert('coming soon') }}>
        设置
      </List.Item>
    </List>
  </div>
}