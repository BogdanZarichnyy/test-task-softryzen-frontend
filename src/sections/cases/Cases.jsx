import images from '../../services/images';

import scss from './Cases.module.scss';

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
                                <picture>
                                    <source srcSet={`${images.cases1WEBP_1x} 1x, ${images.cases1WEBP_2x} 2x`} type="image/webp" />
                                    <source srcSet={`${images.cases1JPG_1x} 1x, ${images.cases1JPG_2x} 2x`} type="image/jpg" />
                                    <img src={`${images.cases1JPG_1x} 1x`} srcSet={`${images.cases1JPG_2x} 2x`} alt="Meeting" title="Meeting" width="280"/>
                                </picture>
                            </li>
                            <li className={scss.item}>
                                <picture>
                                    <source srcSet={`${images.cases2WEBP_1x} 1x, ${images.cases2WEBP_2x} 2x`} type="image/webp" />
                                    <source srcSet={`${images.cases2JPG_1x} 1x, ${images.cases2JPG_2x} 2x`} type="image/jpg" />
                                    <img src={`${images.cases2JPG_1x} 1x`} srcSet={`${images.cases2JPG_2x} 2x`} alt="Working" title="Working" width="280"/>
                                </picture>
                            </li>
                            <li className={scss.item}>
                                <picture>
                                    <source srcSet={`${images.cases3WEBP_1x} 1x, ${images.cases3WEBP_2x} 2x`} type="image/webp" />
                                    <source srcSet={`${images.cases3JPG_1x} 1x, ${images.cases3JPG_2x} 2x`} type="image/jpg" />
                                    <img src={`${images.cases3JPG_1x} 1x`} srcSet={`${images.cases3JPG_2x} 2x`} alt="Diagrama" title="Diagrama" width="280"/>
                                </picture>
                            </li>
                            <li className={scss.item}>
                                <picture>
                                    <source srcSet={`${images.cases4WEBP_1x} 1x, ${images.cases4WEBP_2x} 2x`} type="image/webp" />
                                    <source srcSet={`${images.cases4JPG_1x} 1x, ${images.cases4JPG_2x} 2x`} type="image/jpg" />
                                    <img src={`${images.cases4JPG_1x} 1x`} srcSet={`${images.cases4JPG_2x} 2x`} alt="Buildings" title="Buildings" width="280"/>
                                </picture>
                            </li>
                            <li className={scss.item}>
                                <picture>
                                    <source srcSet={`${images.cases5WEBP_1x} 1x, ${images.cases5WEBP_2x} 2x`} type="image/webp" />
                                    <source srcSet={`${images.cases5JPG_1x} 1x, ${images.cases5JPG_2x} 2x`} type="image/jpg" />
                                    <img src={`${images.cases5JPG_1x} 1x`} srcSet={`${images.cases5JPG_2x} 2x`} alt="Deal" title="Deal" width="280"/>
                                </picture>
                            </li>
                            <li className={scss.item}>
                                <picture>
                                    <source srcSet={`${images.cases6WEBP_1x} 1x, ${images.cases6WEBP_2x} 2x`} type="image/webp" />
                                    <source srcSet={`${images.cases6JPG_1x} 1x, ${images.cases6JPG_2x} 2x`} type="image/jpg" />
                                    <img src={`${images.cases6JPG_1x} 1x`} srcSet={`${images.cases6JPG_2x} 2x`} alt="Selfie" title="Selfie" width="280"/>
                                </picture>
                            </li>
                            {/* <li className={scss.item}>
                                <picture>
                                    <source srcSet={`${images.cases7WEBP_1x} 1x, ${images.cases7WEBP_2x} 2x`} type="image/webp" />
                                    <source srcSet={`${images.cases7JPG_1x} 1x, ${images.cases7JPG_2x} 2x`} type="image/jpg" />
                                    <img src={`${images.cases7JPG_1x} 1x`} srcSet={`${images.cases7JPG_2x} 2x`} alt="Hands" title="Hands" width="280"/>
                                </picture>
                            </li>
                            <li className={scss.item}>
                                <picture>
                                    <source srcSet={`${images.cases8WEBP_1x} 1x, ${images.cases8WEBP_2x} 2x`} type="image/webp" />
                                    <source srcSet={`${images.cases8JPG_1x} 1x, ${images.cases8JPG_2x} 2x`} type="image/jpg" />
                                    <img src={`${images.cases8JPG_1x} 1x`} srcSet={`${images.cases8JPG_2x} 2x`} alt="Fhoto" title="Fhoto" width="280"/>
                                </picture>
                            </li> */}
                        </ul>

                </div>
            </div>
        </section>
    );
}