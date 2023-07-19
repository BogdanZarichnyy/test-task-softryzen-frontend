import { Button } from '../../components/button/Button';

import scss from './About.module.scss';

// import imgJPG_1x from '../../images/gallery/people.jpg';
// import imgJPG_2x from '../../images/gallery/people@2x.jpg';
// import imgWEBP_1x from '../../images/gallery/people.webp';
// import imgWEBP_2x from '../../images/gallery/people@2x.webp';

export const About = () => {
    return (
        <section className={scss.about} id="about">
            <div className='container'>
                <div className={scss.wrraper}>

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