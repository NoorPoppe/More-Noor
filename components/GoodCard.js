import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function goodCard() {

    return (
        <div className={styles.goodsContainer}>
            <div className={styles.goodContainer}>
                <Image src="/gif/design-motion.gif" width={200} height={200} alt="map-work" />
                <h4 className={styles.goodTitel}>Motion Design</h4>
            </div>
            <div className={styles.goodContainer}>
                <Image src="/gif/wireframing.gif" width={200} height={200} alt="map-work" />
                <h4 className={styles.goodTitel}>Wireframing</h4>
            </div>
            <div className={styles.goodContainer}>
                <Image src="/gif/micro.gif" width={200} height={200} alt="map-work" />
                <h4 className={styles.goodTitel}>Microinteraction</h4>
            </div>
        </div>
    )
}