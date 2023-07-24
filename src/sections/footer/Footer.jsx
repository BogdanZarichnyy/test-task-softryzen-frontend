import { Social } from '../../components/social/Social';

import scss from './Footer.module.scss';

export const Footer = () => {
    return (
        <section className={scss.footer} id="footer">
            <div className='container'>
                <div className={scss.wrraper}>

                    <address className={scss.social}>
                        <Social />
                    </address>

                    <p className={scss.copyright}>Copyright © 2021 - FinanceLedger</p>

                </div>
            </div>
        </section>
    );
}