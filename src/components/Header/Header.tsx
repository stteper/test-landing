import cn from 'classnames'
import React from 'react'

import styles from './Header.module.scss'

import { CallButton, Logo } from '../index'

export const Header: React.FC = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={cn([styles.headerContainer, 'container'])}>
        <Logo src={'images/logo.svg'} to={'/'} title={'Circeya'} />
        <CallButton phone={'+7 (495) 495-49-54'} title={'Call us'} />
      </div>
    </header>
  )
}
