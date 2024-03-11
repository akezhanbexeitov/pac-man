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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="game" element={<GamePage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="forum" element={<ForumPage />} />
        <Route path="forum/:topicId" element={<TopicPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
