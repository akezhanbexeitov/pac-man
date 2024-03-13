import styles from './ModalOverlay.module.scss'
import { FC } from 'react'

interface Props {
  onClose: () => void;
}

const ModalOverlay: FC<Props> = ({ onClose }) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
    </>
  )
}
export default ModalOverlay
