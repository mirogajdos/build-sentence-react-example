import React from 'react'
import logo from '../../logo.svg'
import './Layout.css'

const Layout: React.FC = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Build your sentence with React-Redux</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        {props.children}
      </header>
    </div>
  )
}

export default Layout
