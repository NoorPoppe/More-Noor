import Image from 'next/image';
//import Link from 'next/link';
import styles from '../styles/About.module.css';
//import ReactPlayer from 'react-player';



export default function About() {
    return (
        <div>
            <article>
                <h1 className="hidden">About</h1>
                <section className={styles.header}>
                    <div>
                        <h2 className={styles.title} ><Image src="/gif/Hi.gif" width={81} height={110} alt="Hello" /><Image src="/hello-hand.gif" width={170} height={128} alt="Hello" /> Nice <br /> to meet you!</h2>
                        <p className={styles.subTextTitle}>I’m <span className={styles.playfairItalicBig}>Noor</span> a last year student at <span className={styles.textItalic}>Devine,Howest Kortrijk</span>.  I love <span className={styles.playfairItalic}>webdesign</span> and <span className={styles.playfairItalic}>development</span>. Also i’m a fan  of <span className={styles.textShadow}>cinema 4D </span> and motion.</p>
                        <a href="https://docdro.id/baaxsd1" target="_blank" rel="noopener noreferrer"><Image src="/download_my_cv5.gif" width={503} height={180} alt="check out my cv" /></a>
                    </div>
                    <Image src="/meAbout.gif" width={628} height={644} alt="photos of me" />
                </section>
            </article>
            <article className={styles.containerProjects}>
                <h1 className={styles.subTitle}>My skills</h1>
                <div className={styles.skillContainer}>
                    <section className={styles.map}>
                        <Image src="/map-wit.gif" width={248} height={211} alt="map-work" />
                        <h2 className={styles.skillText}>Design</h2>
                    </section>
                    <section className={styles.map}>
                        <Image src="/map-wit.gif" width={248} height={211} alt="map-work" />
                        <h2 className={styles.skillText}>Development</h2>
                    </section>
                    <section className={styles.map}>
                        <Image src="/map-wit.gif" width={248} height={211} alt="map-work" />
                        <h2 className={styles.skillText}>Research</h2>
                    </section>
                </div>
            </article>
            <article>
                <h1 className={styles.educationTitle}>My education</h1>
                <section>
                    <div>

                        <h2>Howest - kask</h2>
                        <ul>
                            <li>Kortrijk, Belgium</li>
                            <li>Bachelor degree</li>
                            <li>Digital Design and Development </li>
                        </ul>
                    </div>
                    <Image src="/gif/bol-2018-now.gif" width={200} height={200} alt="2018-now" />
                </section>
                <section>
                    <div>
                        <h2>Sint-lucas</h2>
                        <ul>
                            <li>Kortrijk, Belgium</li>
                            <li>Bachelor degree</li>
                            <li>Digital Design and Development </li>
                        </ul>
                    </div>
                    <Image src="/gif/bol-2016-2018.gif" width={200} height={200} alt="2016-2018" />
                </section>
            </article>
            <article>
                <h1 className={styles.educationTitle}>My interests</h1>
                <section>
                    <div>
                        <h2>sewing knitting</h2>
                        <p>copy</p>
                        <p>image</p>
                    </div>
                    <p>2018-now</p>
                </section>
                <p>pijlen voor rects en links </p>
            </article>
        </div>
    )
}