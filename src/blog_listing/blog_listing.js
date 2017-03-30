import React, {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import BlogListingItem from './blog_listing_item'

class BlogListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      hasMore: true,
    }
  }

  loadFunc = () => {
    const self = this
    let newItems = []

    setTimeout(() => {
      for (let i=0; i < 3; ++i) {
        newItems.push(<BlogListingItem />)
      }
      self.setState({
        items: self.state.items.concat(newItems),
      })
    }, 2000)
  }

  render() {
    const { items, hasMore } = this.state

    // https://www.hk01.com/api/get_articles/50/{INCREMENT_VALUE}/{EXERPT_LENGTH}
    // lazyload-length="90"
    return (
      <section className="blog_listing large_img">
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={hasMore}
          loader={<div className="loader">Loading ...</div>}
        >
          {items}
        </InfiniteScroll>
      </section>
    )
  }
}

export default BlogListing
