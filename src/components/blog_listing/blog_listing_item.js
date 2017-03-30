import React from 'react'

/*
  article: [
    {
      url: 'https://www.hk01.com/01%E8%A7%80%E9%BB%9E/68089/-01%E8%A7%80%E9%BB%9E-APA%E9%85%92%E5%BA%97%E9%9B%96%E6%92%A4%E5%8F%B3%E7%BF%BC%E6%9B%B8-%E8%BB%8D%E5%9C%8B%E4%B8%BB%E7%BE%A9%E9%99%B0%E9%AD%82%E6%9C%AA%E6%95%A3',
      image: 'd7dd0992b84ec4f1620beda3b98402d9.jpg',
      is_editor_pick: true,
      tag: '01觀點',
      title: '【01觀點】APA酒店雖撤右翼書　軍國主義陰魂未散',
      caption: 'APA酒店被揭在客房擺放多本否認南京大屠殺、否認強徵慰安婦等右翼書籍，惹來包括中韓在內的多國反彈，除中方批評有關做法挑釁中國遊客，內地旅遊業界宣布斷絕和APA的合作；南韓方面則透過……',
      timestamp: '2017年1月26日',
    }
  ]
*/
export default function BlogListingItem({ article }) {
  const imageSrc = `./hk01_files/${article.image}`
  const isEditorPick = article.is_editor_pick ?
    <div className="editor_pick">精選</div> :
    null

  return (
    <div className="blog_listing__item">
        <a href={article.url}>
            <div className="blog_listing__item__img ">
                <img alt="" src={imageSrc} />
                {isEditorPick}
            </div>
            <div className="blog_listing__item__content">
                <div className="blog_listing__item__content__tag">
                    <tag>{article.tag}</tag>
                </div>
                <div className="blog_listing__item__content__tit">
                    <h3>{article.title}</h3>
                </div>
                <div className="blog_listing__item__content__caption">{article.caption}</div>
                <div className="blog_listing__item__content__time"><span className="clock">{article.timestamp}</span></div>
            </div>
        </a>
    </div>
  )
}
