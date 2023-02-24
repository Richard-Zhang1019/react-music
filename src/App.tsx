import { useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '@/components/Header'
import routes from './router'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        {useRoutes(routes)}
      </Provider>
    </div>
  )
}

export default App
