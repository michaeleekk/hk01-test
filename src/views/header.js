import React from 'react'
import { Link } from 'react-router-dom'

import MenuItems from '../mocks/menu_items'
import SubMenuItems from '../mocks/sub_menu_items'

function MainMenu() {
  const onItemClick = () => {
    window.scrollTo(window.scrollX, 0)
  }

  const items = MenuItems.map((item, i) => {
    if (item.link.indexOf('http') === -1) {
      return (
        <li key={i} className="menu__main--tit"><Link to={item.link} onClick={onItemClick}>{item.title}</Link></li>
      )
    }

    return (
      <li key={i} className="menu__main--tit"><a href={item.link} onClick={onItemClick}>{item.title}</a></li>
    )
  })

  return (
    <nav className="menu__main">
        <div className="wrapper">
            <div className="menu__main__scroll">
                <ul className="menu__main_container float_left" style={{ width: '1334px' }}>
                  {items}
                </ul>
            </div>

            <div className="btn_more float_right">
                <div className="menu-toggle-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </nav>
  )
}

function MainMenuFix() {
  const onItemClick = () => {
    window.scrollTo(window.scrollX, 0)
  }

  const items = MenuItems.map((item, i) => {
    if (item.link.indexOf('http') === -1) {
      return (
        <li key={i} className="menu__main--fix--tit"><Link to={item.link} onClick={onItemClick}>{item.title}</Link></li>
      )
    }
    return (
      <li key={i} className="menu__main--fix--tit"><a href={item.link} onClick={onItemClick}>{item.title}</a></li>
    )
  })


  return (
    <nav className="menu__main--fix">
        <div className="menu__main--inner">
            <div className="wrapper">
                <div className="menu__main--fix__logo">
                    <Link to="/">
                        <img src="/hk01_files/logo.png" alt="香港01" />
                    </Link>
                </div>
                <div className="menu__main--fix--current">
                    <a href="https://www.hk01.com/channel/01%E8%A7%80%E9%BB%9E">01觀點</a>
                </div>
                <div className="menu__main--fix__scroll" style={{ width: 'calc(100% - 307px)' }}>
                    <ul className="menu__main--fix_container float_left" style={{ width: '361px' }}>
                        {items}
                    </ul>
                </div>

                <div className="btn_member float_right"></div>
                <div className="btn_search float_right"></div>

                <div className="btn_more float_right">
                    <div className="menu-toggle-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

function SubMenu() {
  const hideMenu = () => {
    // :FIXME: need to convert the menu trigger to react
    const menuMainFix = document.getElementsByClassName('menu__main--fix')[0]

    if (menuMainFix.classList.contains('sticky')) {
      document.getElementsByClassName('btn_more')[1].click()
    } else {
      document.getElementsByClassName('btn_more')[0].click()
    }

    window.scrollTo(window.scrollX, 0)
  }

  const items = SubMenuItems.map((item, i) => {
    if (item.link.indexOf('http') === -1) {
      return (
        <li key={i}><Link to={item.link} onClick={hideMenu}>{item.title}</Link></li>
      )
    }
    return (
      <li key={i}><a href={item.link} onClick={hideMenu}>{item.title}</a></li>
    )
  })

  return (
    <nav id="touch_submenu" className="menu__submenu">
        <div id="touch_submenu_wrapper_container" className="wrapper" style={{ top:0, left:0, zIndex:999 }}>
            <div className="touch_submenu touch_submenu_wrapper">
                <div className="menu__submenu__search" data-search-form="">
                    <input type="search" name="keyword" placeholder="搜尋" />
                    <div className="btn">搜尋</div>
                </div>
            </div>
            <ul className="menu__submenu--list">
                {items}
            </ul>
            <div className="static_links">
                <ul>
                    <li><a href="https://www.hk01.com/Pages/Hotline">01線報</a></li>
                    <li><a href="https://www.hk01.com/Pages/PrivacyTerms">私隱條例</a></li>
                    <li><a href="https://www.hk01.com/mediakit/index.html">廣告查詢</a></li>
                    <li><a href="https://www.hk01.com/Pages/ContactUs">聯絡我們</a></li>
                    <li><a href="https://www.hk01.com/Pages/Recruitment">加入我們</a></li>
                </ul>
                <div className="socialmedia_channel">
                    <a href="https://www.facebook.com/hk01wemedia" target="_blank"><img alt="" src="/hk01_files/facebook_channel.png" width="50" /></a>
                    <a href="http://www.youtube.com/c/%E9%A6%99%E6%B8%AF01WeMedia" target="_blank"><img alt="" src="/hk01_files/youtube_channel.png" width="50" /></a>
                    <a href="https://www.instagram.com/hk01wemedia" target="_blank"><img alt="" src="/hk01_files/instagram_channel.png" width="50" /></a>
                </div>
            </div>
        </div>
    </nav>
  )
}

function MemberButton({ isLoggedIn, onLogout }) {
  if (isLoggedIn) {
    return (
      <a href="#" onClick={onLogout}>
        Logout
      </a>
    )
  }

  return (
    <a id="popup_member">
        <div className="member_btn">
            <span></span>會員登入 </div>
    </a>
  )
}

function View({ isLoggedIn, onLogout }) {
  return (
    <header className=" nocontent">
        <div className="menu__top">
            <div className="wrapper">
                <div className="container">
                    <a id="popup_datetime">
                        <div className="weather" style={{ cursor: 'default' }}>
                            <span className="date">2017.1.29&nbsp;&nbsp;10:00</span>
                            <span className="week">&nbsp;星期日&nbsp;&nbsp;</span>
                            <span className="temp">&nbsp;19°C</span>
                        </div>
                    </a>
                    <div className="container float_right">
                        <a id="popup_search">
                            <div className="search"><span></span></div>
                        </a>
                        <MemberButton isLoggedIn={isLoggedIn} onLogout={onLogout} />
                    </div>
                </div>
                <div className="menu__top__member menu__top_popup">
                    <div className="menu__top__member_beforelogin">
                        <ul>
                            <li><Link className="btn alreadymember" to="/member/login">登入</Link></li>
                            <li><Link className="btn notyetmember" to="/member/registration">註冊成為會員</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu__top__search menu__top_popup" data-search-form="" style={{ right: '53px' }}>
                    <input type="search" name="keyword" placeholder="搜尋" />
                    <div className="btn">搜尋</div>
                </div>
            </div>
        </div>
        <div className="menu__mid">
            <div className="wrapper">
                <Link to="/">
                    <div id="logo" className="float_left">


                        <img src="/hk01_files/logo_CNY.png" alt="香港01" /> // <img src="/hk01_files/logo.png" alt="香港01" />

                    </div>
                </Link>
                <div className="menu__mid--current">
                    <a href="https://www.hk01.com/channel/01%E8%A7%80%E9%BB%9E">01觀點</a>
                </div>
                <div className="ads float_right">
                    <div id="div-gpt-top-header-1"></div>
                </div>
            </div>
        </div>
        <MainMenu />
        <MainMenuFix />
        <SubMenu />
    </header>
  )
}

export default View
