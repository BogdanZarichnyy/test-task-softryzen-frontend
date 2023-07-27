import scss from './Backdrop.module.scss';

export const Backdrop = ({ styles, children }) => {
    return (
        <div className={[scss.backdrop, styles].join(" ")}>
            {children}
        </div>
    );
}