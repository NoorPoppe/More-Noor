import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function goodCard() {

    return (
        <div className={styles.goodsContainer}>
            <div className={styles.goodContainer}>
                <Image src="/gif/bol-2016-2018.gif" width={200} height={200} alt="map-work" />
                <h4 className={styles.goodTitel}>Research</h4>
            </div>
            <div className={styles.goodContainer}>
                <Image src="/gif/bol-2016-2018.gif" width={200} height={200} alt="map-work" />
                <h4 className={styles.goodTitel}>Prototyping</h4>
            </div>
            <div className={styles.goodContainer}>
                <Image src="/gif/bol-2016-2018.gif" width={200} height={200} alt="map-work" />
                <h4 className={styles.goodTitel}>microinteraction</h4>
            </div>
        </div>
    )
}