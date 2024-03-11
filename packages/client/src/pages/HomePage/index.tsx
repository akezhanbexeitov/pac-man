import '@/styles/index.scss'
import { Button } from '@/components/ui'
import { Navigation } from '@/components'

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <h1>Главная страница игры</h1>
      <Button type="primary">Hello world</Button>
    </div>
  )
}

export default HomePage
