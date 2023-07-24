import { Button } from '../../components/button/Button';
import images from '../../services/images';

import scss from './Contact.module.scss';

export const Contact = () => {
    return (
        <section className={scss.contact} id="contact">
            <div className='container'>
                <div className={scss.wrraper}>

                    <div className={scss.imageBox}>
                        <picture>
                            <source srcSet={`${images.contactWEBP_1x} 1x, ${images.contactWEBP_2x} 2x`} type="image/webp" />
                            <source srcSet={`${images.contactJPG_1x} 1x, ${images.contactJPG_2x} 2x`} type="image/jpg" />
                            <img className={scss.image} src={`${images.contactJPG_1x} 1x`} srcSet={`${images.contactJPG_2x} 2x`} alt="Steve Smith" title="Steve Smith" width="320"/>
                        </picture>
                    </div>

                    <div className={scss.info}>

                        <h2 className={scss.title}>Request Callback</h2>

                        <form className={scss.form}>
                            <label className={scss.label} for="name">Enter your name</label>
                            <input className={scss.input} type='text' id="name"/>
                            <label className={scss.label} for="email">Enter email*</label>
                            <input className={scss.input} type='text' id="email"/>
                        </form>

                        <Button styles={scss.buttonContactForm} text="Send"/>

                    </div>

                </div>
            </div>
        </section>
    );
}