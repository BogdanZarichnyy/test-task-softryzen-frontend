import { Button } from '../../components/button/Button';
import images from '../../services/images';
import sprite from '../../images/sprite.svg';

import scss from './Contact.module.scss';

export const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const warningEmailElement = document.querySelector('#warning');
        // console.log(warningEmailElement);

        const form = event.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;

        if (!email) {
            console.log('E-mail is required');
            warningEmailElement.style.opacity = 1;
        } else {
            console.log('Name:', name);
            console.log('E-mail:', email);
            form.reset();
        }
    }

    const handleInputFocus = () => {
        const warningEmailElement = document.querySelector('#warning');
        // console.log(warningEmailElement);
        warningEmailElement.style.opacity = 0;
    }

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

                        <form className={scss.form} onSubmit={handleSubmit}>

                            <label className={scss.label} htmlFor="name">
                                <input className={scss.input} type='text' name="name" id="name" placeholder=" "/>
                                <span className={scss.text}>Enter your name</span>
                            </label>

                            <label className={scss.label} htmlFor="email">
                                <input className={scss.input} type="email" name="email" id="email" placeholder=" " onFocus={handleInputFocus}/>
                                <span className={scss.text}>Enter your E-mail <span className={scss.required}>*</span></span>
                                <span className={scss.warning} id="warning">
                                    <svg className={scss.warningIcon}>
                                        <use id="warning" href={`${sprite}#warning`} />
                                    </svg>
                                    This is a required field
                                </span>
                                <span className={scss.invalid} id="invalid">
                                    <svg className={scss.warningIcon}>
                                        <use id="warning" href={`${sprite}#warning`} />
                                    </svg>
                                    Not a valid email address
                                </span>
                            </label>

                            <Button styles={scss.buttonContactForm} type="submit" text="Send"/>

                        </form>

                    </div>

                </div>
            </div>
        </section>
    );
}