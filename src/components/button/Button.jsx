import scss from './Button.module.scss';

export const Button = ({ styles, inlineStyles, children , text = 'Read More' }) => {
    return (
        <button className={[scss.button, styles].join(" ")} style={inlineStyles} type='button'>
            {children}
            {text}
        </button>
    );
}