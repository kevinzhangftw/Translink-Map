import React from 'react'
import { ClipLoader } from 'react-spinners'

const Styles = {
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: window.innerHeight
  }
}

const Spinner = () => (
  <div style={Styles.spinner}>
    <ClipLoader
      sizeUnit={"px"}
      size={150}
      color={'#123abc'}
      loading={true}
    />
  </div>

)

export default Spinner
