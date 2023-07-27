import ReactDOM from 'react-dom';
import { Backdrop } from '../backdrop/Backdrop';
import { Link } from 'react-scroll';

import sprite from '../../images/sprite.svg';

import scss from './Modal.module.scss';

export const Modal = ({ onCloseModal }) => {
    const closeModal = () => {
        const headerElement = document.querySelector('#header');
        // console.log(headerElement);

        headerElement.style.position = 'fixed';
        headerElement.style.backgroundColor = '#04040480';

        onCloseModal();
    }

    return ReactDOM.createPortal(
        <Backdrop styles={scss.backdropModal}>
            <div className={scss.modal}>
                <h2 className={scss.title}>Thank you!</h2>
                <p className={scss.text}>Your form submission has been received.</p>
                <Link className={scss.link} to="home" spy={true} smooth={true} duration={500} onClick={closeModal}>
                    <svg className={scss.linkIcon}>
                        <use id="arrow" href={`${sprite}#arrow`} />
                    </svg>
                    Back to our site
                </Link>

                {/* <a className={scss.link} href="#home" onClick={onCloseModal}>
                    <svg className={scss.linkIcon}>
                        <use id="arrow" href={`${sprite}#arrow`} />
                    </svg>
                    Back to our site
                </a> */}
            </div>
        </Backdrop>,
        document.body
    );
}