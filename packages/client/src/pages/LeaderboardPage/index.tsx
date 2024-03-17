import LeaderCard from '@/components/LeaderCard'
import styles from './index.module.scss'
import { useState } from 'react'
import { chunk } from '@/utils/chunk'
import { leaders } from '@/pages/LeaderboardPage/data'

const LeaderboardPage = () => {
  const [current, setCurrent] = useState(0)

  const handleClickLeftBtn = () => {
    setCurrent(current - 1)
  }

  const handleClickRightBtn = () => {
    setCurrent(current + 1)
  }

  const data = chunk(leaders, 4)

  const list = Math.ceil(leaders.length / 4)

  const isLeftButtonDisable = current + 1 === 1

  const isRightButtonDisable = current + 1 === list

  return (
    <main className={styles['leaderbord__layout']}>
      <section className={styles['leaderbord__section']}>
        <h1 className={styles['leaderbord__header']}>Лидеры</h1>
        <ul className={styles['leaderbord__list']}>
          {data.map((list, index) => {
            return (
              <li
                key={index}
                className={
                  current === index
                    ? `${styles['leaderbord__list-item-active']}`
                    : `${styles['leaderbord__list-item-non-active']}`
                }>
                <ul className={styles['leaderbord__list-inner']}>
                  {list.map(item => {
                    return (
                      <li key={item.id}>
                        <LeaderCard
                          score={item.score}
                          name={item.name}
                          avatar={item.avatar}
                        />
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
        <div className={styles['leaderbord__controllers']}>
          <button
            disabled={isLeftButtonDisable}
            onClick={handleClickLeftBtn}
            className={`${styles['leaderbord__controllers-btn']} ${styles['leaderbord__controllers-left-btn']}`}
          />
          <span>
            {current + 1}/{list}
          </span>
          <button
            disabled={isRightButtonDisable}
            onClick={handleClickRightBtn}
            className={`${styles['leaderbord__controllers-btn']} ${styles['leaderbord__controllers-right-btn']}`}
          />
        </div>
      </section>
    </main>
  )
}

export default LeaderboardPage
