import React, { Component } from 'react'
import HomeScreenContainer from './containers/HomeScreenContainer'
import { Provider } from "react-redux"
import store from "./store"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HomeScreenContainer />
        </Provider>
      </div>
    )
  }
}

export default App;
