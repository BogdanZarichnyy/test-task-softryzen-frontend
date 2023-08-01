import { Button } from '../../components/button/Button';
import images from '../../assets/images/gallery';

import scss from './About.module.scss';

const About = () => {
    return (
        <section className={scss.about} id="about">
            <div className='container'>
                <div className={scss.wrraper}>

                    <div className={scss.imageBox}>
                        <picture>
                            <source srcSet={`${images.aboutWEBP_1x} 1x, ${images.aboutWEBP_2x} 2x`} type="image/webp" />
                            <source srcSet={`${images.aboutJPG_1x} 1x, ${images.aboutJPG_2x} 2x`} type="image/jpg" />
                            <img className={scss.image} src={`${images.aboutJPG_1x} 1x`} srcSet={`${images.aboutJPG_2x} 2x`} alt="People" title="People" width="320"/>
                        </picture>
                    </div>

                    <div className={scss.info}>

                        <h2 className={scss.title}>
                            <span className={scss.subTitle}>What you are looking for</span>
                            We provide bespoke solutions
                        </h2>

                        <p className={scss.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit 
                            harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus 
                            iste maiores deleniti?</p>

                        <Button styles={scss.buttonAbout} />

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;