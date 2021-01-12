import React from 'react'
import Styles from './index.module.less'

export default ({ title, onClick }: { title: string, onClick: () => void }) => (
  <button 
    className={Styles.btnPrimary}
    onClick={onClick}>
    {title}
  </button>);
