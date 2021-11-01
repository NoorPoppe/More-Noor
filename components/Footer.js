import styles from '../styles/Footer.module.css'
import Image from 'next/image';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <h1 className={styles.title}>Contact</h1>
                <div className={styles.logo}>
                    <Image src="/logo-contact.svg" width={44} height={59} alt="logo" />
                    <p className={styles.logoText}>More Noor</p>
                </div>
                <ul className={styles.text}>
                    <div className={styles.textColumn}>
                        <div className={styles.textPoint}>
                            <a href="mailto:noor.poppe@icloud.com"><Image src="/img/mail.svg" width={58} height={58} alt="mail" /></a>
                            <li><a className={styles.textA} href="mailto:noor.poppe@icloud.com">noor.poppe@icloud.com</a></li>
                        </div>
                        <div className={styles.textPoint}>
                            <a href="tel:+32485535503"> <Image src="/img/tel.svg" width={58} height={58} alt="telephone" /></a>
                            <li><a className={styles.textA} href="tel:+32485535503">+32485535503</a></li>
                        </div>
                    </div>
                    <div className={styles.textColumn}>
                        <div className={styles.textPoint}>
                            <a href="https://docdro.id/baaxsd1" target="_blank" rel="noopener noreferrer"><Image src="/img/cv.svg" width={58} height={58} alt="cv" /></a>
                            <li><a className={styles.textA} href="https://docdro.id/baaxsd1" target="_blank" rel="noopener noreferrer">CV</a></li>
                        </div>
                        <div className={styles.textPoint}>
                            <a href="https://www.instagram.com/more_n00r/"><Image src="/img/isnta.svg" width={58} height={58} alt="instagram" /></a>
                            <li><a className={styles.textA} href="https://www.instagram.com/more_n00r/">more_n00r</a></li>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}