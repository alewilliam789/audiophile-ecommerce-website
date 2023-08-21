'use client'

import Image from 'next/image';


import Navbar from '../Navbar';

import useScreenWidth from '@/hooks/useScreenWidth';

import audiophileLogo from '../../assets/shared/desktop/logo.svg';
import facebookLogo from '../../assets/shared/desktop/icon-facebook.svg';
import twitterLogo from '../../assets/shared/desktop/icon-twitter.svg';
import instagramLogo from '../../assets/shared/desktop/icon-instagram.svg';

import styles from './styles.module.scss';




export default function Footer(){

    const width = useScreenWidth();

    function SocialMediaLinks(){
        return (
            <>
                <div className={`${styles['l-flex--social-links']} ${styles['l-grid__item--social-links']}`}>
                            <Image priority src={facebookLogo} alt='Check out our Facebook'/>
                            <Image priority src={twitterLogo} alt='Check out our Twitter'/>
                            <Image priority src={instagramLogo} alt='Check out our Instagram'/>
                </div>
            </>
        )
    }




    return (
        <>
            <footer className={`${styles[`c-footer`]} ${styles['c-footer--primary']} ${styles['l-flex--footer']}`}>
                <div className={`${styles['c-footer__content']} ${styles['l-grid']}`}>
                    <Image priority className={`${styles['c-audiophile-logo']}`} src={audiophileLogo} alt='Audiophile Logo' />
                    <div className={`${styles['c-navbar']} ${styles['l-grid__item--nav']}`}>
                        <Navbar />
                    </div>
                    <p className={`${styles['l-grid__item--footer-text']}`}>
                        Audiophile is an all in one stop to fulfill your
                        audio needs. We're a small team of music lovers
                        and sound specialists who are devoted to helping
                        you get the most out of personal audio. Come and 
                        visit our demo facility - we're open 7 days a week.
                    </p>
                    {width>=1300 && <SocialMediaLinks />}
                    <div className={`${styles['c-subcontainer']} ${styles['l-flex--mobile']} ${styles['l-grid__item']}`}>
                        <sub>Copyright 2021. All Rights Reserved</sub>
                        {(width <= 1300 && width>=768) && <SocialMediaLinks />}
                    </div>
                    {width <768 && <SocialMediaLinks />}
                </div>
            </footer>
        </>
    )
}