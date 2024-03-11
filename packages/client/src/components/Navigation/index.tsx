import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/login'>Логин</Link></li>
        <li><Link to='/registration'>Регистрация</Link></li>
        <li><Link to='/profile'>Профиль</Link></li>
        <li><Link to='/game'>Игра</Link></li>
        <li><Link to='/leaderboard'>Лидерборд</Link></li>
        <li><Link to='/forum'>Форум</Link></li>
      </ul>
    </nav>
  )
}
export default Navigation
