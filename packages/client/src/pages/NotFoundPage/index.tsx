import Error from "@/components/Error";
import styles from "./index.module.scss";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {TError} from "@/typings/types";
import {errors} from "@/pages/NotFoundPage/errors";

const NotFoundPage = () => {
  const params = useParams();
  const code = params?.code;
  const [error, setError] = useState<TError>(errors[0]);

  useEffect(()=>{
    if(code) {
      const error = errors.filter((e) => +e.code === +code);
      if(error.length){
        setError(error[0]);
      }
    }
  }, []);

  return <div>
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <Error code={error.code} text={error.text} link={'/'} />
      </main>
    </div>
  </div>
}

export default NotFoundPage;
