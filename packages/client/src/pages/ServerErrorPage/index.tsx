import Error from "@/components/Error";
import styles from './index.module.scss';

const ServerErrorPage = () => {
  return <div>
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <Error code={'500'} text={'Ну нет такой страницы'} link={'/'} />
      </main>
    </div>

  </div>
}

export default ServerErrorPage
