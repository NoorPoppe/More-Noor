
import styles from '../styles/Contact.module.css'
import Mailer from '../components/email/mailer'
import Mail from '../components/email/mail'
import Image from 'next/image';

export default function Contact() {

    return (
        <div className={styles.contact}>
            <section className={styles.contactContainer}>
                <article>
                    <h1 className={styles.title}> My Contact </h1>
                    <p className={styles.text}>Any <span className={styles.textItalic}>questions</span>? Wanna <span className={styles.textItalic}>work togheter</span>?Send me a <span className={styles.textItalic}>message</span>  ✉️</p>
                </article>
                <div className={styles.letterContainter}>
                    <article>
                        <h1 className="hidden">A letter</h1>
                        <Mailer />
                    </article>
                    <article>
                        <h1 className="hidden">social contacts</h1>
                        <section className={styles.contactText}>
                            <h2 className="hidden">contacts</h2>
                            <div> <a href="mailto:noor.poppe@icloud.com">
                               <div className={styles.contactBox}>
                                <Image src="/img/email-contact.svg" width={48} height={48} alt="email" />
                                <p className={styles.contactBoxText}>noor.poppe @icloud.com</p>
                                </div>
                                </a>
                            </div>
                            <div><a href="tel:+32485535503">
                                <div className={styles.contactBox}>
                                <Image src="/img/tel-contact.svg" width={48} height={48} alt="telephone" />
                                    <p className={styles.contactBoxText}>0485535503</p>
                                </div>
                                </a>
                                
                            </div>
                            <p>or via socials</p>
                            <article>
                                <a href="https://www.instagram.com/more_n00r/"><Image src="/img/tel-contact.svg" width={48} height={48} alt="insta" /></a>
                            </article>
                        </section>
                    </article>
                </div>
            </section>
        </div >
    )
}