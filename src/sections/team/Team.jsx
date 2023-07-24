import { Social } from '../../components/social/Social';
import { Backdrop } from '../../components/backdrop/Backdrop';
import images from '../../services/images';

import scss from './Team.module.scss';

export const Team = () => {
    return (
        <section className={scss.team} id="team">
            <div className='container'>
                <div className={scss.wrraper}>

                        <h2 className={scss.title}>
                            <span className={scss.subTitle}>Who we are</span>
                            Our Professional Team
                        </h2>

                        <p className={scss.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>

                        <ul className={scss.gallery}>
                            <li className={scss.item}>
                                <div className={scss.image}>
                                    <picture>
                                        <source srcSet={`${images.person1WEBP_1x} 1x, ${images.person1WEBP_2x} 2x`} type="image/webp" />
                                        <source srcSet={`${images.person1JPG_1x} 1x, ${images.person1JPG_2x} 2x`} type="image/jpg" />
                                        <img src={`${images.person1JPG_1x} 1x`} srcSet={`${images.person1JPG_2x} 2x`} alt="John Doe" title="John Doe" width="280"/>
                                    </picture>
                                    <Backdrop>
                                        <Social />
                                    </Backdrop>
                                </div>
                                <h3 className={scss.name}>John Doe</h3>
                                <p className={scss.position}>President</p>
                            </li>
                            <li className={scss.item}>
                                <div className={scss.image}>
                                    <picture>
                                        <source srcSet={`${images.person2WEBP_1x} 1x, ${images.person2WEBP_2x} 2x`} type="image/webp" />
                                        <source srcSet={`${images.person2JPG_1x} 1x, ${images.person2JPG_2x} 2x`} type="image/jpg" />
                                        <img src={`${images.person2JPG_1x} 1x`} srcSet={`${images.person2JPG_2x} 2x`} alt="Jane Doe" title="Jane Doe" width="280"/>
                                    </picture>
                                    <Backdrop>
                                        <Social />
                                    </Backdrop>
                                </div>
                                <h3 className={scss.name}>Jane Doe</h3>
                                <p className={scss.position}>Vice President</p>
                            </li>
                            <li className={scss.item}>
                                <div className={scss.image}>
                                    <picture>
                                        <source srcSet={`${images.person3WEBP_1x} 1x, ${images.person3WEBP_2x} 2x`} type="image/webp" />
                                        <source srcSet={`${images.person3JPG_1x} 1x, ${images.person3JPG_2x} 2x`} type="image/jpg" />
                                        <img src={`${images.person3JPG_1x} 1x`} srcSet={`${images.person3JPG_2x} 2x`} alt="Steve Smith" title="Steve Smith" width="280"/>
                                    </picture>
                                    <Backdrop>
                                        <Social />
                                    </Backdrop>
                                </div>
                                <h3 className={scss.name}>Steve Smith</h3>
                                <p className={scss.position}>Marketing Head</p>
                            </li>
                        </ul>

                </div>
            </div>
        </section>
    );
}