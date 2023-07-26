import sprite from '../../images/sprite.svg';
import scss from './Social.module.scss';

export const Social = () => {
    return (
        <ul className={scss.socialList}>
            <li className={scss.item}>
                <a className={scss.link} href='/'>
                    <svg className={scss.linkIcon}>
                        <use id="facebook" href={`${sprite}#facebook`} />
                    </svg>
                </a>
            </li>
            <li className={scss.item}>
                <a className={scss.link} href='/'>
                    <svg className={scss.linkIcon}>
                        <use id="twitter" href={`${sprite}#twitter`} />
                    </svg>
                </a>
            </li>
            <li className={scss.item}>
                <a className={scss.link} href='/'>
                    <svg className={scss.linkIcon}>
                        <use id="youtube" href={`${sprite}#youtube`} />
                    </svg>
                </a>
            </li>
            <li className={scss.item}>
                <a className={scss.link} href='/'>
                    <svg className={scss.linkIcon}>
                        <use id="linkedIn" href={`${sprite}#linkedIn`} />
                    </svg>
                </a>
            </li>
        </ul>
    );
}