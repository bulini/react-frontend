import React from 'react'
import { CookiesProvider } from 'react-cookie'
import TokenAuthComponent from './TokenAuth.js'

class AppComponent extends React.Component {
  render() {
    return (
      <CookiesProvider>
        <TokenAuthComponent />
      </CookiesProvider>
    )
  }
}

AppComponent.defaultProps = {}

export default AppComponent
