import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Layout from './components/Layout/Layout'
import Form from './containers/Form'
import Sentence from './containers/Sentence'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Form />
        <Sentence />
      </Layout>
    </Provider>
  )
}

export default App
