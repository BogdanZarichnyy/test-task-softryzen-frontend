import scss from './Backdrop.module.scss';

export const Backdrop = ({ children }) => {
    return (
        <div className={scss.backdrop}>
            {children}
        </div>
    );
}