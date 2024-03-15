import styles from './index.module.scss'
import { Button, Field, TextArea } from '@/components/ui'
import { FC } from 'react'

interface Props {
  onClose: () => void
}

const ModalCreate: FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <form className={styles.modal__content}>
        <Field
          label="Название темы"
          type="text"
          placeholder="Введите название темы"
        />
        <TextArea label="Описание" placeholder="Введите описание темы" />
        <Button
          variant="primary"
          className={styles.modal__create}
          type="submit">
          Создать
        </Button>
      </form>
      <Button
        variant="secondary"
        type="button"
        className={styles.modal__cancel}
        onClick={onClose}>
        Отменить
      </Button>
    </div>
  )
}

export default ModalCreate
