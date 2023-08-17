import Link from 'next/link';
import Image from 'next/image';


import audiophileLogo from '../../assets/shared/desktop/logo.svg';

import styles from './styles.module.scss';


export default function Navbar(){

    const linkNames = ["HOME", "HEADPHONES","SPEAKERS", "EARPHONES"]

    const links = linkNames.map((linkName)=>{
        return <Link href={`/${linkName == 'HOME' ? "": `${linkName.toLowerCase()}`}`}>{linkName}</Link>
    })

    return (
                    <nav className={`flex justify-between align-center ${styles.navbar}`}>
                        {links}
                    </nav>
    )
}