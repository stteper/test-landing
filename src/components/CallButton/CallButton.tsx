import React from 'react'

import styles from './CallButton.module.scss'
import { CallButtonProps } from './interface'

export const CallButton: React.FC<CallButtonProps> = ({ phone, ...props }: CallButtonProps) => {
  const phoneLink = `tel:+${phone.replace(/\D/g, '')}`

  return (
    <a className={styles.phoneButton} href={phoneLink} {...props}>
      {phone}
    </a>
  )
}
