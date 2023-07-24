import { Button } from '../../components/button/Button';
import images from '../../services/images';

import scss from './Blog.module.scss';

export const Blog = () => {
    return (
        <section className={scss.blog} id="blog">
            <div className='container'>
                <div className={scss.wrraper}>

                    <div className={scss.imageBox}>
                        <picture>
                            <source srcSet={`${images.blogWEBP_1x} 1x, ${images.blogWEBP_2x} 2x`} type="image/webp" />
                            <source srcSet={`${images.blogJPG_1x} 1x, ${images.blogJPG_2x} 2x`} type="image/jpg" />
                            <img className={scss.image} src={`${images.blogJPG_1x} 1x`} srcSet={`${images.blogJPG_2x} 2x`} alt="Table" title="Table" width="320"/>
                        </picture>
                    </div>

                    <div className={scss.info}>

                        <h2 className={scss.title}>
                            <span className={scss.subTitle}>April 16 2020</span>
                            Blog Post One
                        </h2>

                        <p className={scss.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum 
                            dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>

                        <Button styles={scss.buttonBlog} text="Read Our Blog" />

                    </div>

                </div>
            </div>
        </section>
    );
}