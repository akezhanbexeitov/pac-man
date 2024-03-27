import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)
