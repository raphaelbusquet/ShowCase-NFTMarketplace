import Image from 'next/image'
import React from 'react'

import styles from '@/styles/Global'
import assets from '../assets'
import Button from './Button'

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
      <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} bg-gradient-to-r from-white to-blue-500`}
    >
      <div className={`flex items-center ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv} ${reverse ? "fadeRightMini" : "fadeLeftMini" } ${reverse ? styles.textRight : styles.textLeft }
        fadeLeftMini`}
        >
          <h1 className={`
          ${reverse ? styles.whiteText : styles.blackText}  
          ${styles.h1Text}`}>{title}</h1>
          <h1 className={`
          ${reverse ? styles.whiteText : styles.blackText}  
          ${styles.descriptionText}`}>{description}</h1>
          {showBtn && (
            <Button 
              assetUrl={assets.expo}
              link="https://github.com/raphaelbusquet/NFTMarketplace---ReactNative"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-9`}>
          <Image src={mockupImg} alt="mockup" 
              className={`${styles.sectionImg} ${reverse ? "fadeLeftMini" : "fadeRightMini" }`}
          />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper