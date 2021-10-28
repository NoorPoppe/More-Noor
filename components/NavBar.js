import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <header className={styles.nav}>
            <ul className={styles.navBar}>
                <li><Link href="/"><a><Image src="/logo-noor.svg" width={58} height={76} alt="logo" /></a></Link></li>
                <div className={styles.navBarItems}>
                    <li> <Link href="/projects/"><a className={styles.navBarItem}>More work</a></Link></li>
                    <li> <Link href="/about/"><a className={styles.navBarItem}>About </a></Link></li>
                    <li> <Link href="/contact/"><a className={styles.navBarItem}>Contact</a></Link></li>
                </div >
            </ul >
        </header >
    )

};

export default Navbar;