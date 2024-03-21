import { FC } from 'react';
import styles from './index.module.scss';
import enemyIcon from './img/i1.png';
import {Link} from "react-router-dom";
import {Button} from "@/components/ui";
import Loader from "@/components/ui/Loader";

interface Props {
  code: string | number
  text: string
  link: string
}

const Error: FC<Props> = ({ code, text }) => {
  return (
    <div className={styles.error}>
      <div className={styles.errorContent}>
        <header className={styles.head}>
          <h5 className={styles.code}>{code}</h5>
        </header>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
        <Link className={styles.link} to='/'>
          <Button variant="secondary">
            На главную
          </Button>
        </Link>
      </div>
      <div className={styles.errorImage}>
        <img src={enemyIcon} alt={`error ${code} image`}/>
      </div>
    </div>
  )
}

export default Error
