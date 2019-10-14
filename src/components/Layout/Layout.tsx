import React from 'react'
import './Layout.css'

const Layout: React.FC = props => {
  return (
    <div className="App">
      <header className="App-header">{props.children}</header>
    </div>
  )
}

export default Layout
