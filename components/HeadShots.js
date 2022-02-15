import React from 'react'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import styles from '../styles/Home.module.css'

export const HeadShots = () => {

    const scrollRef = useHorizontalScroll()


    return (
        <div ref={scrollRef} className={styles.headshot_container}>
            <img className={styles.headshot} src="/headphoto1.jpg"  alt="Raul Moya Photo"/>
            <img className={styles.headshot} src="/headphoto2.jpg"  alt="Raul Moya Photo"/>
            <img className={styles.headshot} src="/headphoto.jpg"   alt="Raul Moya Photo"/>  
     

        </div>
    )
}
