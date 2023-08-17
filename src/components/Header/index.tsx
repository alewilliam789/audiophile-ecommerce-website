'use client'

import Link from 'next/link';
import Image from 'next/image';


import Navbar from '../Navbar';

import  useScreenWidth from '../../hooks/useScreenWidth'

import audiophileLogo from '../../assets/shared/desktop/logo.svg';
import cartLogo from '../../assets/shared/desktop/icon-cart.svg';
import menuLogo from '../../assets/shared/tablet/menu.svg';

import styles from './styles.module.scss';




export default function Header(){

    const width = useScreenWidth()

    const linkNames = ["HOME", "HEADPHONES","SPEAKERS", "EARPHONES"]

    const links = linkNames.map((linkName)=>{
        return <Link href={`/${linkName == 'HOME' ? "": `${linkName.toLowerCase()}`}`}>
            <h6>{linkName}</h6>
        </Link>

    })

        return (
            <>
                <header className={`${styles.header}`}>
                    <div className={`flex justify-between align-center ${styles['header-container']}`}>
                        <div className={`flex align-center`} style={{gap:"42px"}}>
                            {width <= 1300 && <Image priority src={menuLogo} alt='Dropdown Menu' />}
                            <Image priority src={audiophileLogo} alt="Audiophile Logo" />
                        </div>
                        {width >=1300 && <Navbar />}
                        <Image priority src={cartLogo} alt={"Cart Icon"} />
                    </div>
                </header>
            </>
        )
}