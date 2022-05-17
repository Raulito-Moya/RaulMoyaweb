import React from 'react'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import styles from '../styles/Home.module.css'

export const HeadShots = () => {

    const scrollRef = useHorizontalScroll()


    return (
        <div ref={scrollRef} className={styles.headshot_container}>
            <img className={styles.headshot} src="https://res.cloudinary.com/dx33ki9ul/image/upload/v1652746858/photo_2021-06-29_08-05-55_zunzfx.jpg"  alt="Raul Moya Photo"/>
            <img className={styles.headshot} src="https://res.cloudinary.com/dx33ki9ul/image/upload/v1652746895/photo_2021-06-16_20-22-05_tbjqkc.jpg"  alt="Raul Moya Photo"/>
            <img className={styles.headshot} src="https://res.cloudinary.com/dx33ki9ul/image/upload/v1652746828/photo_2022-05-16_19-18-55_auxqdx.jpg"   alt="Raul Moya Photo"/>  
            <img className={styles.headshot} src="https://res.cloudinary.com/dx33ki9ul/image/upload/v1652746828/photo_2022-05-16_19-19-01_sg4ywt.jpg"   alt="Raul Moya Photo"/>  
     

        </div>
    )
}
