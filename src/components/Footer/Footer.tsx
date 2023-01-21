import React from 'react'

import styles from './Footer.module.scss'

import { Copyright } from '../index'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.siteFooter}>
      <Copyright />
    </footer>
  )
}
