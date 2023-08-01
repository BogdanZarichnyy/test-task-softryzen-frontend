import PropTypes from 'prop-types';

import { useEffect } from 'react';
import scss from './Backdrop.module.scss';

export const Backdrop = ({ styles, children, handleCloseModalBackdrop, handleCloseModalKeyDown }) => {

    useEffect(() => {
        window.addEventListener('keydown', handleCloseModalKeyDown);

        return () => {
            window.removeEventListener('keydown', handleCloseModalKeyDown);
        }
    }, [handleCloseModalKeyDown]);

    return (
        <div className={[scss.backdrop, styles].join(" ")} onClick={handleCloseModalBackdrop}>
            {children}
        </div>
    );
}

Backdrop.protoTypes = {
    styles: PropTypes.string,
    children: PropTypes.shape,
    handleCloseModalBackdrop: PropTypes.func,
    handleCloseModalKeyDown: PropTypes.func,
};