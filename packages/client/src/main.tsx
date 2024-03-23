import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
