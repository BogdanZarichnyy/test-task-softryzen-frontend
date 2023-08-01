import { Social } from '../../components/social/Social';
import { Backdrop } from '../../components/backdrop/Backdrop';
import images from '../../assets/images/team';

import scss from './Team.module.scss';

const Team = () => {
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
                            
                            {images.map((item) => 
                                <li className={scss.item} key={item.id}>
                                    <div className={scss.image}>
                                        <picture>
                                            <source srcSet={`${item.imageWEBP_1x} 1x, ${item.imageWEBP_2x} 2x`} type="image/webp" />
                                            <source srcSet={`${item.imageJPG_1x} 1x, ${item.imageJPG_2x} 2x`} type="image/jpg" />
                                            <img src={`${item.imageJPG_1x} 1x`} srcSet={`${item.imageJPG_2x} 2x`} alt={item.name} title={item.name} width="280"/>
                                        </picture>
                                        <Backdrop>
                                            <Social/>
                                        </Backdrop>
                                    </div>
                                    <h3 className={scss.name}>{item.name}</h3>
                                    <p className={scss.position}>{item.position}</p>
                                </li>
                            )}

                        </ul>

                </div>
            </div>
        </section>
    );
}

export default Team;