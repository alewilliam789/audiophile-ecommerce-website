import Link from 'next/link';
import Image from 'next/image';


import Navbar from '../Navbar';

import audiophileLogo from '../../assets/shared/desktop/logo.svg';
import cartLogo from '../../assets/shared/desktop/icon-cart.svg';

import styles from './styles.module.scss';




export default function Header(){

    const linkNames = ["HOME", "HEADPHONES","SPEAKERS", "EARPHONES"]

    const links = linkNames.map((linkName)=>{
        return <Link href={`/${linkName == 'HOME' ? "": `${linkName.toLowerCase()}`}`}>
            <h6>{linkName}</h6>
        </Link>

    })

    return (
        <>
            <header className={`${styles.header}`}>
                <div className={`flex justify-between ${styles['header-container']}`}>
                    <Navbar />
                    <Image priority src={cartLogo} alt={"Cart Icon"} />
                </div>
            </header>
        </>
    )
}