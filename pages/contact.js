
import styles from '../styles/Contact.module.css'
import Mailer from '../components/email/mailer'


export default function Contact() {

    return (
        <div className={styles.contact}>
            <article>
                <h1> My Contact </h1>
                <p>Any questions❓ wanna work togheter? send me a message ✉️</p>
            </article>
            <article>
                <h1 className="hidden">A letter</h1>
                <Mailer />

            </article>
            <article>
                <h1 className="hidden">social contacts</h1>
                <section>
                    <h2 className="hidden">contacts</h2>
                    <div>
                        <p>noor.poppe@icloud.com</p>
                    </div>
                    <div>
                        <p>0485535503</p>
                    </div>
                    <p>or via socials</p>
                    <article>
                        <h3 className="hidden">socails</h3>
                        <p>more_n00r</p>
                    </article>
                </section>
            </article>
        </div>
    )
}