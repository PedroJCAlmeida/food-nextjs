import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
 
export default function MianHeader(){
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
            <img src={logoImg.src} alt="A plate with food on it"></img>
            NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Food Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}