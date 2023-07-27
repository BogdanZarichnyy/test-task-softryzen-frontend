import { useEffect, useState } from 'react';
import { Button } from '../../components/button/Button';
import { Modal } from '../../components/modal/Modal';
import { useForm } from "react-hook-form";

import images from '../../services/images';
import sprite from '../../images/sprite.svg';

import scss from './Contact.module.scss';

export const Contact = () => {
    // const [state, setState] = useState({ name: "", email: "" });
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({  });

    // const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const EMAIL_PATTERN = /^([a-zA-Z0-9._]{1}[a-zA-Z0-9._-]+)+@[a-zA-Z0-9._-]+\.([a-zA-Z0-9._-]*[a-zA-Z0-9._]+)$/;
    // const EMAIL_REGEXP = new RegExp(EMAIL_PATTERN, 'i');

    useEffect(() => {
        document.querySelector('#invalid');
        document.querySelector('#header');
    }, []);

    const invalidEmail = () => {
        const invalidEmailElement = document.querySelector('#invalid');
        if (invalidEmailElement) {
            // console.log(invalidEmailElement);
            invalidEmailElement.style.opacity = 1;
        }
        return;
    }

    const validEmail = () => {
        const invalidEmailElement = document.querySelector('#invalid');
        if (invalidEmailElement) {
            // console.log(invalidEmailElement);
            invalidEmailElement.style.opacity = 0;
        }
        return;
    }

    errors.email?.message === "Not a valid E-mail address" && console.log(errors);
    errors.email?.message === "Not a valid E-mail address" ? invalidEmail() : validEmail();

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    // const handleSubmitForm = async (event) => {
    //     event.preventDefault();

    //     const warningEmailElement = document.querySelector('#warning');
    //     // console.log(warningEmailElement);

    //     const form = event.currentTarget;
    //     // const name = form.elements.name.value;
    //     const email = form.elements.email.value;

    //     if (!email) {
    //         console.log('E-mail is required');
    //         warningEmailElement.style.opacity = 1;
    //         return;
    //     } else {
    //         // console.log('Name:', name);
    //         // console.log('E-mail:', email);

    //         await fetch("/", {
    //                 method: "POST",
    //                 headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //                 body: encode({ "form-name": "contact", ...state })
    //             })
    //             .then(() => console.log("Success!"))
    //             .catch(error => alert(error));

    //         console.log('Name:', state.name);
    //         console.log('E-mail:', state.email);

    //         setState({ name: "", email: "" });
    //         // form.reset();
    //     }
    // }

    const handleSubmitForm = async (data) => {
        const warningEmailElement = document.querySelector('#warning');
        // console.log(warningEmailElement);
        const headerElement = document.querySelector('#header');
        // console.log(headerElement);

        if (!data.email) {
            console.log('E-mail is required');
            warningEmailElement.style.opacity = 1;
            return;
        } else {
            // console.log('Name:', name);
            // console.log('E-mail:', email);

            await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({ "form-name": "contact", ...data })
                })
                .then(() => console.log("Success!"))
                .catch(error => alert(error));

            console.log('Name:', data.name);
            console.log('E-mail:', data.email);
            
            headerElement.style.position = 'absolute';
            headerElement.style.backgroundColor = 'transparent';
            
            reset();
            setShowModal(true);
        }
    }

    // const handleChange = (event) => {
    //     // console.log(event.target.name);
    //     setState((preventDefault) => ({ ...preventDefault, [event.target.name]: event.target.value }));
    // }

    const handleInputFocus = () => {
        const warningEmailElement = document.querySelector('#warning');
        // console.log(warningEmailElement);
        warningEmailElement.style.opacity = 0;
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };

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

                        <form className={scss.form} onSubmit={handleSubmit((data) => handleSubmitForm(data))} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

                            <input type="hidden" name="form-name" value="contact" />

                            <label className={scss.label} htmlFor="name">
                                <input className={scss.input} type='text' {...register("name")} id="name" placeholder=" " />
                                <span className={scss.text}>Enter your name</span>
                            </label>

                            <label className={scss.label} htmlFor="email">
                                <input className={scss.input} type="email" {...register("email", { pattern: {value: EMAIL_PATTERN, message: "Not a valid E-mail address" } })} id="email" placeholder=" " onFocus={handleInputFocus} />
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

                        {/* <form className={scss.form} onSubmit={handleSubmitForm} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact" />

                            <label className={scss.label} htmlFor="name">
                                <input className={scss.input} type='text' name="name" id="name" placeholder=" "value={state.name} onChange={handleChange} />
                                <span className={scss.text}>Enter your name</span>
                            </label>

                            <label className={scss.label} htmlFor="email">
                                <input className={scss.input} type="email" name="email" id="email" placeholder=" " onFocus={handleInputFocus} value={state.email} onChange={handleChange}/>
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

                        </form> */}

                    </div>

                    {showModal && <Modal onCloseModal={handleCloseModal}/>}

                </div>
            </div>
        </section>
    );
}