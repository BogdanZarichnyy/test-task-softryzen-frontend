import sprite from '../../images/sprite.svg';

import scss from './Header.module.scss';

export const Header = () => {
    return (
        <header className={scss.header} id="home">
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
                    </ul>

                </nav>
            </div>
        </header>
    );
}