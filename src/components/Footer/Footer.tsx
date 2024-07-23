import { useEffect, useState, type FC } from 'react'
import './Footer.scss'

import {
  AppOutline,
  ExclamationCircleOutline,
  UserOutline,
} from 'antd-mobile-icons'
import { Link } from '../Link/Link'
import { useLocation } from 'react-router-dom'


const Footer: FC = () => {
  const rLocation = useLocation()
  const [currentPath, setCurrentPath] = useState('/')
  useEffect(() => {
    setCurrentPath(rLocation.pathname)
  }, [rLocation.pathname])
  const tabs = [
    {
      key: '/',
      title: 'Home',
      icon: <AppOutline />,
    },
    {
      key: '/detail',
      title: 'Product',
      icon: <ExclamationCircleOutline />,
    },
    {
      key: '/my',
      title: 'My',
      icon: <UserOutline />,
    },
  ]

  return (
    <div className='footer-container'>
      {
        tabs.map((item, index) => {
          return <Link to={item.key} key={index} className={`footer-container-item ${currentPath == item.key ? 'footer-container-item-active' : ''}`}>
            <div>{item.icon}</div>
            <div>{item.title}</div>
          </Link>
        })
      }
    </div>
  )
}

export default Footer