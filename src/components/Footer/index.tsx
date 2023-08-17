import Image from 'next/image';


import Navbar from '../Navbar';

import facebookLogo from '../../assets/shared/desktop/icon-facebook.svg';
import twitterLogo from '../../assets/shared/desktop/icon-twitter.svg';
import instagramLogo from '../../assets/shared/desktop/icon-instagram.svg';

import styles from './styles.module.scss';



export default function Footer(){
    return (
        <>
            <footer className={styles.footer}>
                <div className={`${styles['footer-container']}`}>
                    <Navbar />
                    <section className={`flex justify-between`}>
                            <p>
                                Audiophile is an all in one stop to fulfill your
                                audio needs. We're a small team of music lovers
                                and sound specialists who are devoted to helping
                                you get the most out of personal audio. Come and 
                                visit our demo facility - we're open 7 days a week.
                            </p>
                            <div className={`flex ${styles['footer-social-media-container']}`}>
                                <Image priority src={facebookLogo} alt='Check out our Facebook'/>
                                <Image priority src={twitterLogo} alt='Check out our Twitter'/>
                                <Image priority src={instagramLogo} alt='Check out our Instagram'/>

                            </div>
                    </section>
                    <sub>Copyright 2021. All Rights Reserved</sub>

                </div>
            </footer>
        </>
    )
}