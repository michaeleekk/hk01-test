import React, {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import BlogListingItem from './blog_listing_item'

class BlogListing extends Component {
  render() {
    const { loadArticles, articles } = this.props

    const items = articles.map((article, i) => <BlogListingItem key={i} article={article} />)

    return (
      <section className="blog_listing large_img">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadArticles}
          hasMore={true}
          loader={<div className="loader">Loading ...</div>}
        >
          {items}
        </InfiniteScroll>
      </section>
    )
  }
}

export default BlogListing
