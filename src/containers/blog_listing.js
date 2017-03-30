import { connect } from 'react-redux'
import { getArticles } from '../actions'
import BlogListing from '../components/blog_listing'

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadArticles: () => {
      dispatch(getArticles())
    }
  }
}

const BlogListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogListing)

export default BlogListingContainer
