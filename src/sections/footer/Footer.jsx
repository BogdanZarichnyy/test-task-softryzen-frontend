import { Social } from '../../components/social/Social';

import scss from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={scss.footer} id="footer">
            <div className='container'>
                <div className={scss.wrraper}>

                    <address className={scss.social}>
                        <Social />
                    </address>

                    <p className={scss.copyright}>Copyright © 2021 - FinanceLedger</p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;