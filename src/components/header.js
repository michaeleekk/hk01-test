import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
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
                        <a id="popup_member">
                            <div className="member_btn">
                                <span></span>會員登入 </div>
                        </a>
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
        <nav className="menu__main">
            <div className="wrapper">
                <div className="menu__main__scroll">
                    <ul className="menu__main_container float_left" style={{ width: '1334px' }}>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/">主頁</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/channel/%E6%96%B0%E8%81%9E">新聞</a></li>

                        <li className="menu__main--tit"><a href="http://2017hkceelection.hk01.com/">特首選舉2017</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/section/01%E8%A7%80%E9%BB%9E">01觀點</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/blogger/01%E5%8D%9A%E8%A9%95">01博評</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/channel/%E7%A4%BE%E5%8D%80">社區</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/channel/%E5%A8%9B%E6%A8%82">娛樂</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/section/%E5%9C%8B%E9%9A%9B">國際</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/channel/%E5%A5%B3%E7%94%9F">女生</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/section/%E5%A5%BD%E7%94%9F%E6%B4%BB">好生活</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/section/%E9%AB%94%E8%82%B2">體育</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/channel/%E7%86%B1%E8%A9%B1">熱話</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/channel/%E7%A7%91%E6%8A%80%E7%8E%A9%E7%89%A9">科技玩物</a></li>

                        <li className="menu__main--tit"><a href="http://philosophy.hk01.com/">01哲學</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/photostory">01影像</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/channel/01%E6%B4%BB%E5%8B%95">01活動</a></li>

                        <li className="menu__main--tit"><a href="http://space.hk01.com/">01空間</a></li>

                        <li className="menu__main--tit"><a href="https://www.hk01.com/channel/%E6%9C%83%E5%93%A1%E5%B0%88%E5%8D%80">會員專區</a></li>
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
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/">主頁</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/channel/%E6%96%B0%E8%81%9E">新聞</a></li>
                            <li className="menu__main--fix--tit"><a href="http://2017hkceelection.hk01.com/">特首選舉2017</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/section/01%E8%A7%80%E9%BB%9E">01觀點</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/blogger/01%E5%8D%9A%E8%A9%95">01博評</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/channel/%E7%A4%BE%E5%8D%80">社區</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/channel/%E5%A8%9B%E6%A8%82">娛樂</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/section/%E5%9C%8B%E9%9A%9B">國際</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/channel/%E5%A5%B3%E7%94%9F">女生</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/section/%E5%A5%BD%E7%94%9F%E6%B4%BB">好生活</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/section/%E9%AB%94%E8%82%B2">體育</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/channel/%E7%86%B1%E8%A9%B1">熱話</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/channel/%E7%A7%91%E6%8A%80%E7%8E%A9%E7%89%A9">科技玩物</a></li>
                            <li className="menu__main--fix--tit"><a href="http://philosophy.hk01.com/">01哲學</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/photostory">01影像</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/channel/01%E6%B4%BB%E5%8B%95">01活動</a></li>
                            <li className="menu__main--fix--tit"><a href="http://space.hk01.com/">01空間</a></li>
                            <li className="menu__main--fix--tit"><a href="https://www.hk01.com/channel/%E6%9C%83%E5%93%A1%E5%B0%88%E5%8D%80">會員專區</a></li>
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
        <nav id="touch_submenu" className="menu__submenu">
            <div id="touch_submenu_wrapper_container" className="wrapper" style={{ top:0, left:0, zIndex:999 }}>
                <div className="touch_submenu touch_submenu_wrapper">
                    <div className="menu__submenu__search" data-search-form="">
                        <input type="search" name="keyword" placeholder="搜尋" />
                        <div className="btn">搜尋</div>
                    </div>
                </div>
                <ul className="menu__submenu--list">
                    <li><a href="http://www.hk01.com/">主頁</a></li>
                    <li><a href="http://www.hk01.com/module/hotnews">熱門文章</a></li>
                    <li><a href="http://www.hk01.com/module/latestnews">最新文章</a></li>
                    <li><a href="https://www.hk01.com/channel/%E6%96%B0%E8%81%9E">新聞</a></li>
                    <li><a href="http://2017hkceelection.hk01.com/">特首選舉</a></li>
                    <li><a href="https://www.hk01.com/section/%E6%B8%AF%E8%81%9E">港聞</a></li>
                    <li><a href="https://www.hk01.com/section/%E5%85%A9%E5%B2%B8">兩岸</a></li>
                    <li><a href="https://www.hk01.com/section/%E7%B6%93%E6%BF%9F">經濟</a></li>
                    <li><a href="https://www.hk01.com/section/%E7%92%B0%E4%BF%9D">環保</a></li>
                    <li><a href="https://www.hk01.com/section/%E7%BD%AA%E6%A1%88">罪案</a></li>
                    <li><a href="https://www.hk01.com/channel/%E7%A4%BE%E5%8D%80">社區</a></li>
                    <li><a href="https://www.hk01.com/channel/%E5%A8%9B%E6%A8%82">娛樂</a></li>
                    <li><a href="https://www.hk01.com/channel/%E9%9B%BB%E5%BD%B1">電影</a></li>
                    <li><a href="https://www.hk01.com/channel/%E9%9F%B3%E6%A8%82">音樂</a></li>
                    <li><a href="https://www.hk01.com/channel/%E9%9F%93%E8%BF%B7">韓迷</a></li>
                    <li><a href="https://www.hk01.com/section/%E5%9C%8B%E9%9A%9B">國際</a></li>
                    <li><a href="https://www.hk01.com/channel/%E5%A5%B3%E7%94%9F">女生</a></li>
                    <li><a href="https://www.hk01.com/section/%E5%A5%BD%E7%94%9F%E6%B4%BB">好生活</a></li>
                    <li><a href="https://www.hk01.com/channel/%E8%A6%AA%E5%AD%90">親子</a></li>
                    <li><a href="https://www.hk01.com/channel/%E5%AF%B5%E7%89%A9">寵物</a></li>
                    <li><a href="https://www.hk01.com/channel/01%E6%95%99%E7%85%AE">01教煮</a></li>
                    <li><a href="https://www.hk01.com/section/%E9%AB%94%E8%82%B2">體育</a></li>
                    <li><a href="https://www.hk01.com/section/%E8%B7%91%E6%AD%A5">跑步</a></li>
                    <li><a href="https://www.hk01.com/channel/%E7%86%B1%E8%A9%B1">熱話</a></li>
                    <li><a href="https://www.hk01.com/channel/%E7%A7%91%E6%8A%80%E7%8E%A9%E7%89%A9">科技玩物</a></li>
                    <li><a href="http://philosophy.hk01.com/">01哲學</a></li>
                    <li><a href="https://www.hk01.com/section/01%E8%A7%80%E9%BB%9E">01觀點</a></li>
                    <li><a href="https://www.hk01.com/blogger/01%E5%8D%9A%E8%A9%95">01博評</a></li>
                    <li><a href="http://www.hk01.com/bloggers">博評作者</a></li>
                    <li><a href="https://www.hk01.com/channel/01%E5%81%B5%E6%9F%A5">01偵查</a></li>
                    <li><a href="https://www.hk01.com/photostory">01影像</a></li>
                    <li><a href="http://www.hk01.com/tag/9972">01 Video</a></li>
                    <li><a href="https://www.hk01.com/section/01%E6%B4%BB%E5%8B%95">01活動</a></li>
                    <li><a href="http://space.hk01.com/">01空間</a></li>
                    <li><a href="https://www.hk01.com/channel/%E6%9C%83%E5%93%A1%E5%B0%88%E5%8D%80">會員專區</a></li>
                    <li><a href="https://www.hk01.com/issue">01議題</a></li>
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

    </header>
  )
}

export default Header
