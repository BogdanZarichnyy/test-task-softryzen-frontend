import PropTypes from 'prop-types';

import scss from './Button.module.scss';

export const Button = ({ styles, inlineStyles, children, type = 'button', text = 'Read More', }) => {
    return (
        <button className={[scss.button, styles].join(" ")} style={inlineStyles} type={type}>
            {children}
            {text}
        </button>
    );
}

Button.protoTypes = {
    styles: PropTypes.string,
    inlineStyles: PropTypes.string,
    children: PropTypes.shape,
    type: PropTypes.string,
    text: PropTypes.string,
};