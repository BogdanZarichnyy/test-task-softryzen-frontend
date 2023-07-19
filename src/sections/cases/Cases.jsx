import scss from './Cases.module.scss';

import img1JPG_1x from '../../images/cases/cases1.jpg';
import img1JPG_2x from '../../images/cases/cases1@2x.jpg';
import img1WEBP_1x from '../../images/cases/cases1.webp';
import img1WEBP_2x from '../../images/cases/cases1@2x.webp';

import img2JPG_1x from '../../images/cases/cases2.jpg';
import img2JPG_2x from '../../images/cases/cases2@2x.jpg';
import img2WEBP_1x from '../../images/cases/cases2.webp';
import img2WEBP_2x from '../../images/cases/cases2@2x.webp';

import img3JPG_1x from '../../images/cases/cases3.jpg';
import img3JPG_2x from '../../images/cases/cases3@2x.jpg';
import img3WEBP_1x from '../../images/cases/cases3.webp';
import img3WEBP_2x from '../../images/cases/cases3@2x.webp';

import img4JPG_1x from '../../images/cases/cases4.jpg';
import img4JPG_2x from '../../images/cases/cases4@2x.jpg';
import img4WEBP_1x from '../../images/cases/cases4.webp';
import img4WEBP_2x from '../../images/cases/cases4@2x.webp';

import img5JPG_1x from '../../images/cases/cases5.jpg';
import img5JPG_2x from '../../images/cases/cases5@2x.jpg';
import img5WEBP_1x from '../../images/cases/cases5.webp';
import img5WEBP_2x from '../../images/cases/cases5@2x.webp';

import img6JPG_1x from '../../images/cases/cases6.jpg';
import img6JPG_2x from '../../images/cases/cases6@2x.jpg';
import img6WEBP_1x from '../../images/cases/cases6.webp';
import img6WEBP_2x from '../../images/cases/cases6@2x.webp';

// import img7JPG_1x from '../../images/cases/cases7.jpg';
// import img7JPG_2x from '../../images/cases/cases7@2x.jpg';
// import img7WEBP_1x from '../../images/cases/cases7.webp';
// import img7WEBP_2x from '../../images/cases/cases7@2x.webp';

// import img8JPG_1x from '../../images/cases/cases8.jpg';
// import img8JPG_2x from '../../images/cases/cases8@2x.jpg';
// import img8WEBP_1x from '../../images/cases/cases8.webp';
// import img8WEBP_2x from '../../images/cases/cases8@2x.webp';

export const Cases = () => {
    return (
        <section className={scss.cases} id="cases">
            <div className='container'>
                <div className={scss.wrraper}>

                        <h2 className={scss.title}>
                            <span className={scss.subTitle}>This is what we do</span>
                            Business Cases
                        </h2>

                        <p className={scss.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>

                        <ul className={scss.gallery}>
                            <li className={scss.item}>
                                <img className={scss.image} src={img1JPG_1x} alt="Not found img1JPG_1x"/>
                            </li>
                            <li className={scss.item}>
                                <img className={scss.image} src={img2JPG_1x} alt="Not found img2JPG_1x"/>
                            </li>
                            <li className={scss.item}>
                                <img className={scss.image} src={img3JPG_1x} alt="Not found img3JPG_1x"/>
                            </li>
                            <li className={scss.item}>
                                <img className={scss.image} src={img4JPG_1x} alt="Not found img4JPG_1x"/>
                            </li>
                            <li className={scss.item}>
                                <img className={scss.image} src={img5JPG_1x} alt="Not found img5JPG_1x"/>
                            </li>
                            <li className={scss.item}>
                                <img className={scss.image} src={img6JPG_1x} alt="Not found img6JPG_1x"/>
                            </li>
                        </ul>

                </div>
            </div>
        </section>
    );
}