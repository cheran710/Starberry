import React, { useEffect, useState } from 'react'
import { initTheme, toggleTheme } from '../../../Theme/Themecomponent'
import './Navbar.scss'
import  {ImageUtil}  from '../../../Assert/ImageUtil'
import LayoutLogic from '../../../../FunctionHandle/Layout'
import { useSelector } from 'react-redux'
import { RootState } from '@/DataHandle/Redux/store'

interface NavbarProps {
  brandName?: string
}

const Navbar: React.FC<NavbarProps> = () => {

  const imageUtil = new ImageUtil()
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const {handleprofileopen,handleLogout}=LayoutLogic()

  useEffect(() => {
    initTheme()
    const savedTheme = localStorage.getItem('theme')
    setIsDarkTheme(savedTheme === 'dark')
  }, [])

  const handleToggle = () => {
    toggleTheme()
    setIsDarkTheme((prevState) => !prevState)
  }

   const username = useSelector((state: RootState) => state.auth.data.username);

  return (
    <>
      {/* {authSlice.isLoading ? <Spinner></Spinner> : */}
      <> <nav className="navbar">
        <div className="brand">
          <h4 className="logo">
            <img
              src={imageUtil.Logo}
              alt="logo"
            />
          </h4>
        </div>
        <ul className="navList">
          <li>
            <button type="button" onClick={handleToggle}>
              <img
                src={
                  isDarkTheme ? imageUtil.Lightmodeicon : imageUtil.Darkthemeicon
                }
                alt={isDarkTheme ? 'lighttheme' : 'darktheme'}
                className={`themeicon ${isDarkTheme ? 'lighttheme' : 'darktheme'}`}

              />
            </button>
          </li>
          <li className="notification-container">
            <img
              src={imageUtil.NotificationIcon}
              alt="notification"
              className="notification-icon"
            />
            {10 > 0 && <div className="notification-badge">{10}</div>}
          </li>
          <li className='profileWrap'>
            <button onClick={handleprofileopen}>
              <img
                src={imageUtil.ProfilePicBlackIcon}
                alt="Toggle Sidebar"
                className="profile-icon"
              />
            </button>
            <h3 className='UserName'>{username ?`${username}` : ''}</h3>
          </li>
          <li className="Logout-container" onClick={handleLogout}>
            <img src={imageUtil.LogoutIcon} alt="Logout" className="Logout-icon" />
          </li>
        </ul>
      </nav>
      </>
      {/* } */}
    </>
  )
}

export default Navbar
