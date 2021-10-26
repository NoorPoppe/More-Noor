import Link from 'next/link';
import Image from 'next/image'


const Navbar = () => {
    return (
        <header>
            <ul>
                <li><Link href="/"><a><Image src="/logo.png" width={164} height={141} alt="logo" /></a></Link></li>
                <div>
                    <li><Link href="/projects/"><a>More work</a></Link></li>
                    <li><Link href="/about/"><a>About </a></Link></li>
                    <li><Link href="/contact/"><a>Contact</a></Link></li>
                </div>
            </ul>
        </header>
    )

};

export default Navbar;