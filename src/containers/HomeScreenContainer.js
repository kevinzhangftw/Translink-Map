import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeScreen from '../components/HomeScreen'
import { dispatch } from 'rxjs/internal/observable/range';

class HomeScreenContainer extends Component {
  render() {
    return (
      <HomeScreen />
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)
