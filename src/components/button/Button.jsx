import scss from './Button.module.scss';

export const Button = ({ styles, inlineStyles, children }) => {
    return (
        <button className={[scss.button, styles].join(" ")} style={inlineStyles} type='button'>
            {children}
            Read More
        </button>
    );
}