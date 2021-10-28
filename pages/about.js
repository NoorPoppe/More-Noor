import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/About.module.css'
//import ReactPlayer from 'react-player';



export default function About() {
    return (
        <div>
            <article>
                <h1 className="hidden">About</h1>
                <section className={styles.header}>
                    <div>
                        <h2 className={styles.title} ><Image src="/hello.gif" width={219} height={132} alt="Hello" /><Image src="/hello-hand.gif" width={213} height={160} alt="Hello" /> Nice to meet you!</h2>
                        <p className={styles.subTextTitle}>I’m <span className={styles.playfairItalic}>Noor</span> a last year student at <span className={styles.playfairItalic}>Devine,Howest Kortrijk</span>.  I love <span className={styles.playfairItalic}>webdesign</span> and <span className={styles.playfairItalic}>development</span>. Also i’m a fan  of <span className={styles.playfairItalic}>cinema 4D </span> and motion.</p>
                        <a href="https://docdro.id/baaxsd1" target="_blank" rel="noopener noreferrer"><Image src="/download_my_cv5.gif" width={503} height={180} alt="check out my cv" /></a>
                    </div>
                    <Image src="/images-about.png" width={636} height={651} alt="Hello" />
                </section>
            </article>
            <article className={styles.containerProjects}>
                <h1 className={styles.subTitle}>My skills</h1>
                    <section className={styles.map}>
                        <Image src="/map-wit.gif" width={248} height={211} alt="map-work" />
                        <h2 className={styles.text}>Design</h2>
                    </section>
                <section>
                    <h2 className="hidden">Development</h2>
                </section>
                <section>
                    <h2 className="hidden">Research</h2>
                </section>
            </article>
            <article>
                <h1>My education</h1>
                <section>
                    <div>
                        <h2>Howest - kask</h2>
                        <ul>
                            <li>Kortrijk, Belgium</li>
                            <li>Bachelor degree</li>
                            <li>Digital Design and Development </li>
                        </ul>
                    </div>
                    <p>2018-now</p>
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
                    <p>2018-now</p>
                </section>
            </article>
            <article>
                <h1>My interests</h1>
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