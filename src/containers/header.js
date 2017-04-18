import { connect } from 'react-redux'

import { logout } from '../actions'

import View from '../views/header'
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logout())
    },
  }
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(View)

export default Header
