import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  name: string
  score: number
  avatar?: string
}

const LeaderCard: FC<Props> = ({ avatar, name, score }) => {
  return (
    <section className={styles['leadercard__card']}>
      <h2 className={styles['leadercard__header']}>{name}</h2>
      <div className={styles['leadercard__avatar-container']}>
        <img
          className={styles['leadercard__avatar']}
          alt={`avatar ${name}`}
          src={avatar}
        />
      </div>
      <p className={styles['leadercard__description']}>Рейтинг</p>
      <p className={styles['leadercard__score']}>{score}</p>
    </section>
  )
}

export default LeaderCard
