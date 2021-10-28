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
                        <li><Image src="/img/mail.svg" width={58} height={58} alt="mail" /><a className={styles.textA} href="mailto:noor.poppe@icloud.com">noor.poppe@icloud.com</a></li>
                        <li> <Image src="/img/tel.svg" width={58} height={58} alt="telephone" /><a className={styles.textA} href="tel:+32485535503">+32485535503</a></li>
                    </div>
                    <div className={styles.textColumn}>
                        <li><Image src="/img/cv.svg" width={58} height={58} alt="cv" /><a className={styles.textA} href="https://docdro.id/baaxsd1" target="_blank" rel="noopener noreferrer">CV</a></li>
                        <li><Image src="/img/isnta.svg" width={58} height={58} alt="instagram" /><a className={styles.textA} href="https://www.instagram.com/more_n00r/">more_n00r</a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}