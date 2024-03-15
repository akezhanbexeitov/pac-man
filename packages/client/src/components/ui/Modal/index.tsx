import { createPortal } from 'react-dom'
import { FC, ReactNode, useEffect } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const keydownHandler = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
      default:
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => document.removeEventListener('keydown', keydownHandler)
  }, [])

  return createPortal(
    <div className={styles.modal__overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  )
}
export default Modal
