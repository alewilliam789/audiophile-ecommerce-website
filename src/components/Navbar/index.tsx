'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';


import audiophileLogo from '../../assets/shared/desktop/logo.svg';

import styles from './styles.module.scss';


export default function Navbar(){

    const router = useRouter();

    const linkNames = ["HOME", "HEADPHONES","SPEAKERS", "EARPHONES"]

    const links = linkNames.map((linkName)=>{
        return <h6 onClick={()=>{router.push(`/${linkName == 'HOME' ? "": `${linkName.toLowerCase()}`}`)}}>{linkName}</h6>
    })

    return (
        <div className={`flex justify-between align-center ${styles['navbar-container']}`}>
                    <Image priority src={audiophileLogo} alt={"Audiophile Logo"} />
                    <nav className={`flex justify-center align-center ${styles.navbar}`}>
                        {links}
                    </nav>
        </div>
    )


}