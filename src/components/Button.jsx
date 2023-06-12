'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Global'

const Button = ({ assetUrl, link }) => {
  return (
    <div className={`${styles.btnBlack} flex flex-row gap-3`}
      onClick={() => window.open(link, "_blank")}
    >
        <Image src={assetUrl} alt="expo_icon"
          className={styles.btnIcon}
        />
        <div>
          <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
          <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
        </div>
    </div>
  )
}

export default Button