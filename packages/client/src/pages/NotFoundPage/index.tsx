import Error from "@/components/Error";
import styles from './index.module.scss';

const NotFoundPage = () => {
  return <div>
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <Error code={'404'} text={'Ну нет такой страницы'} link={'/'} />
      </main>
    </div>

  </div>
}

export default NotFoundPage
