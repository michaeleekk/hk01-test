const { hashString } = require('./utils')

const MockUsers = [
  {
    email: 'michael@michael.com',
    password: '1234qwer'
  }
]

const MockArticles = [
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

module.exports = { MockUsers, MockArticles }
