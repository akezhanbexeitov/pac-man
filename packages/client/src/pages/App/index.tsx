import '@/styles/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  ForumPage,
  GamePage,
  HomePage,
  LeaderboardPage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  TopicPage
} from '@/pages'
import { ROUTES } from '@/typings'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

const App = () => {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTRATION} element={<RegisterPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.GAME} element={<GamePage />} />
          <Route path={ROUTES.LEADERBOARD} element={<LeaderboardPage />} />
          <Route path={ROUTES.FORUM} element={<ForumPage />} />
          <Route path={`${ROUTES.FORUM}/:topicId`} element={<TopicPage />} />
          <Route path={`${ROUTES.ERROR}/:code`} element={<NotFoundPage />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
