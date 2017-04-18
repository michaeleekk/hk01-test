export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN'
export function setIsLoggedIn(isLoggedIn) {
  return {
    type: SET_IS_LOGGED_IN,
    isLoggedIn,
  }
}
