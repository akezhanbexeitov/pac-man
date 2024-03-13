import { createPortal } from 'react-dom'
import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import cn from 'classnames'
import ModalOverlay from '@/components/ui/Modal/ModalOverlay'

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ children, onClose, isOpen }) => {
  const [mounted, setMounted] = useState(false)
  
  
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
  })
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return mounted && isOpen
    ? createPortal(
      <>
        <ModalOverlay onClose={onClose} />
        <div className={cn(styles.modal)}>
          {children}
        </div>
      </>,
      document.body
    )
    : null
}
export default Modal
