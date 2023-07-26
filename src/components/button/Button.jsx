import scss from './Button.module.scss';

export const Button = ({ styles, inlineStyles, children, type = 'button', text = 'Read More', }) => {
    return (
        <button className={[scss.button, styles].join(" ")} style={inlineStyles} type={type}>
            {children}
            {text}
        </button>
    );
}