import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-scroll';

import sprite from '../../images/sprite.svg';

import scss from './Header.module.scss';

const MOBILE_RESOLUTION_POINT = 320; // 320px
const TABLET_RESOLUTION_POINT = 768; // 768px
const DESKTOP_RESOLUTION_POINT = 1360; // 1360px

const Header = () => {
    const [dimensions, setDimensions] = useState({ 
        // height: window.innerHeight,
        width: window.innerWidth
    });
    const [scrollHeader, setScrollHeader] = useState(120);
    const [scrollOffset, setScrollOffset] = useState(-124); // -124px smooth scroll navigation
    const [scrollOffsetContactSection, setScrollOffsetContactSection] = useState(-124); // -124px smooth scroll navigation

    const handlerResize = useCallback(() => {
        setDimensions({
            // height: window.innerHeight,
            width: window.innerWidth
        });
    }, []);

    const handlerScroll = useCallback((event) => {
        const headerElement = document.querySelector('#header');
        // console.log(headerElement);
        const scrollTopWindow = event.target.documentElement.scrollTop;

        if(scrollTopWindow >= scrollHeader) {
            // headerElement.classList.add(scss.scroll);
            headerElement.style.position = 'fixed';
            headerElement.style.backgroundColor = '#04040480';
            headerElement.style.zIndex = 10;
        } else {
            // headerElement.classList.remove(scss.scroll);
            headerElement.style.position = 'absolute';
            headerElement.style.backgroundColor = 'transparent';
            headerElement.style.zIndex = 1;
        }
        
        // console.log('scrollTop', scrollTopWindow);
        // console.log('innerWidth', dimensions.width);
    }, [scrollHeader]);

    useEffect(() => {
        window.addEventListener('resize', handlerResize);

        return () => {
            window.removeEventListener('resize', handlerResize);
        }
    }, [handlerResize]);

    useEffect(() => {
        document.addEventListener('scroll', handlerScroll);

        return function() {
            document.removeEventListener('scroll', handlerScroll);
        }
    }, [handlerScroll]);

    useEffect(() => {
        if (dimensions.width >= MOBILE_RESOLUTION_POINT & dimensions.width < TABLET_RESOLUTION_POINT) {
            setScrollHeader(120); // window.scrollTop 120px
            setScrollOffset(-124); // scroll navigation -124px
            setScrollOffsetContactSection(-124); // scroll navigation -124px
        } else if (dimensions.width >= TABLET_RESOLUTION_POINT & dimensions.width < DESKTOP_RESOLUTION_POINT) {
            setScrollHeader(70); // window.scrollTop 70px
            setScrollOffset(-80); // scroll navigation -80px
            setScrollOffsetContactSection(-500); // scroll navigation -80px
        } else {
            setScrollHeader(70); // window.scrollTop 70px
            setScrollOffset(-121); // scroll navigation -80px
            setScrollOffsetContactSection(-500); // scroll navigation -80px
        }
    }, [dimensions.width, setScrollHeader, setScrollOffset]);

    return (
        <header className={scss.header} id="header">
            <div className='container'>
                <nav className={scss.wrraper}>

                    <a className={scss.logo} href="./">
                        <svg className={scss.logoIcon}>
                            <use id="logo" href={`${sprite}#logo`} />
                        </svg>
                        <span className={scss.logoPrefix}>Finance</span>
                        Ledger
                    </a>

                    <ul className={scss.navigation}>
                        <li className={scss.item}>
                            <Link className={scss.link} activeClass={scss.active} to="home" spy={true} smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className={scss.item}>
                            <Link className={scss.link} activeClass={scss.active} to="about" spy={true} smooth={true} offset={scrollOffset} duration={500}>About</Link>
                        </li>
                        <li className={scss.item}>
                            <Link className={scss.link} activeClass={scss.active} to="cases" spy={true} smooth={true} offset={scrollOffset} duration={500}>Cases</Link>
                        </li>
                        <li className={scss.item}>
                            <Link className={scss.link} activeClass={scss.active} to="blog" spy={true} smooth={true} offset={scrollOffset} duration={500}>Blog</Link>
                        </li>
                        <li className={scss.item}>
                            <Link className={scss.link} activeClass={scss.active} to="contact" spy={true} smooth={true} offset={scrollOffsetContactSection} duration={500}>Contact</Link>
                        </li>
                    </ul>

                    {/* <a className={scss.logo} href="./">
                        <svg className={scss.logoIcon}>
                            <use id="logo" href={`${sprite}#logo`} />
                        </svg>
                        <span className={scss.logoPrefix}>Finance</span>
                        Ledger
                    </a>

                    <ul className={scss.navigation}>
                        <li className={scss.item}>
                            <a className={scss.link} href="#home">Home</a>
                        </li>
                        <li className={scss.item}>
                            <a className={scss.link} href="#about">About</a>
                        </li>
                        <li className={scss.item}>
                            <a className={scss.link} href="#cases">Cases</a>
                        </li>
                        <li className={scss.item}>
                            <a className={scss.link} href="#blog">Blog</a>
                        </li>
                        <li className={scss.item}>
                            <a className={scss.link} href="#contact">Contact</a>
                        </li>
                    </ul> */}

                </nav>
            </div>
        </header>
    );
}

export default Header;