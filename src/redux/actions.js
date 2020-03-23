import {
  INCREMENT,
  DECREMENT,
  ASYNC,
  CHANGE_THEME,
  ENABLE_BTN,
  DISABLE_BTN
} from './types'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function enableBtn() {
  return {
    type: ENABLE_BTN
  }
}

export function disableBtn() {
  return {
    type: DISABLE_BTN
  }
}

export function asyncC() {
  return function(dispatch) {
    dispatch(disableBtn())
    setTimeout(() => {
      dispatch({ type: ASYNC })
      dispatch(enableBtn())
    }, 2000)
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}
