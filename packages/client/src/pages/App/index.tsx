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
  TopicPage,
} from '@/pages'
import { ROUTES, User } from '@/typings'
import { AppDispatch } from '@/store/store'
import { useEffect } from 'react'
import AuthService from '@/services/auth'
import { useDispatch } from 'react-redux'
import { addUserInfo, logIn } from '@/store/actions/authUser'

const App = () => {
  const { getMe } = AuthService()
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    const authUser = async () => {
      const user = await getMe()
      await dispatch(addUserInfo(user as User))
      await dispatch(logIn())
    }

    authUser()
  }, [])

  return (
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
  )
}

export default App
