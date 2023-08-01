import { Button } from '../../components/button/Button';

import sprite from '../../images/sprite.svg';
import scss from './Home.module.scss';

const Home = () => {
    return (
        <section className={scss.home} id="home">
            <div className='container'>
                <div className={scss.wrraper}>

                    <h1 className={scss.title}>The Sky Is The Limit</h1>

                    <p className={scss.text}>We provide world class financial assistance</p>

                    <Button inlineStyles={{ marginTop: "24px" }}>
                        <svg className={scss.buttonIcon}>
                            <use id="arrow-right" href={`${sprite}#arrow-right`} />
                        </svg>
                    </Button>
                    
                </div>
            </div>
        </section>
    );
}

export default Home;