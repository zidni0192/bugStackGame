import React, { Fragment } from 'react'
import {
  StyleSheet,

} from 'react-native'
import MainNavigator from './src/navigatior/mainNavigator'
import {
  Provider
} from 'react-redux'
import store from './src/publics/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}
const styles = StyleSheet.create({
})

export default App;