import PropTypes from 'prop-types';

import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop } from '../backdrop/Backdrop';
import { Link } from 'react-scroll';

import sprite from '../../images/sprite.svg';

import scss from './Modal.module.scss';

export const Modal = ({ onCloseModal, handleCloseModalBackdrop, handleCloseModalKeyDown, }) => {

    useEffect(() => {
        const backdropElement = document.querySelector('#close-modal');
        // console.log(backdropElement);
        backdropElement.focus();
    });

    return ReactDOM.createPortal(
        <Backdrop styles={scss.backdropModal} handleCloseModalBackdrop={handleCloseModalBackdrop} handleCloseModalKeyDown={handleCloseModalKeyDown}>
            <div className={scss.modal}>
                <h2 className={scss.title}>Thank you!</h2>
                <p className={scss.text}>Your form submission has been received.</p>
                <Link to="home" spy={true} smooth={true} duration={500} onClick={onCloseModal}>
                    <button className={scss.link} type="button" id="close-modal">
                        <svg className={scss.linkIcon}>
                            <use id="arrow" href={`${sprite}#arrow`} />
                        </svg>
                        Back to our site
                    </button>
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

Modal.protoTypes = {
    onCloseModal: PropTypes.func,
    handleCloseModalBackdrop: PropTypes.func,
    handleCloseModalKeyDown: PropTypes.func,
};