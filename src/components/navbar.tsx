import Link from "next/link"
import styles from '@/styles/Navbar.module.css'
import HamburgerMenu from "./hmburgermenu"
export default function Navbar (){
    return(
        <nav className= {styles.nav}>
            <section className="logo">FDND</section>
            <HamburgerMenu/>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/frontender">Frontender Worden</Link>
                </li>
                <li>
                    <Link href="/frontender">Inhoud van de opleiding </Link>
                </li>
                <li>
                    <Link href="/frontender">Mogelijke beroepen</Link>
                </li>
                <li>
                    <Link href="/frontender"> Toelatingseisen</Link>
                </li>
            </ul>
        </nav>
    )
}