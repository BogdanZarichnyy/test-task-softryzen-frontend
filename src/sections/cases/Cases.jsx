import { useState } from 'react';
import { Slider } from '../../components/slider/Slider';

import images from '../../assets/images/cases';

import scss from './Cases.module.scss';

const Cases = () => {
    const [showModal, setShowModal] = useState(false);
    const [imageId, setImageId] = useState();
    const [image, setImage] = useState();
    const [imagesList, setImagesList] = useState(images);

    // const handleOpenModal = (imageId) => {
    const handleOpenModal = (image) => {
        // const marginSize = window.innerWidth - window.document.body.clientWidth;
        // console.log(window.innerWidth);
        // console.log(window.document.body.clientWidth);
        // console.log('marginSize', marginSize);
        // window.document.body.style.marginRight = marginSize + "px";
        
        const headerElement = document.querySelector('#header');
        headerElement.style.position = 'absolute';
        headerElement.style.backgroundColor = 'transparent';

        const bodyElement = document.querySelector('body');
        bodyElement.style.overflow = 'hidden';

        // console.log(imageId);
        // console.log(images);
        // setImageId(imageId);
        // setImagesList(images);

        setImage(image);

        setShowModal(true);

    };

    const prevHandlerImage = (ImageId) => {
        // console.log('prevHandlerImage: ImageId =', ImageId);
        ImageId -= 1;
        if (ImageId === 0) {
            return null;
        } else if (ImageId === 1) {
            const prevImage = imagesList.filter((item) => item.id === ImageId)[0];
            // console.log(prevImage);
            setImage(prevImage);
            return null;
        } else {
            const prevImage = imagesList.filter((item) => item.id === ImageId)[0];
            // console.log(prevImage);
            setImage(prevImage);
        }
    }

    const nextHandlerImage = (ImageId) => {
        // console.log('nextHandlerImage: ImageId =', ImageId);
        ImageId += 1;
        if (ImageId === 9) {
            return null;
        } else if (ImageId === 8) {
            const prevImage = imagesList.filter((item) => item.id === ImageId)[0];
            // console.log(prevImage);
            setImage(prevImage);
            return null;
        } else {
            const nextImage = imagesList.filter((item) => item.id === ImageId)[0];
            // console.log(nextImage);
            setImage(nextImage);
        }
    }
    
    const handleCloseModal = () => {
        const headerElement = document.querySelector('#header');
        headerElement.style.position = 'fixed';
        headerElement.style.backgroundColor = '#04040480';

        const bodyElement = document.querySelector('body');
        bodyElement.style.overflow = 'auto';

        setShowModal(false);
    };

    const handleCloseModalBackdrop = ({ currentTarget, target }) => {
        if (currentTarget === target) {
            // setShowModal(false);
            handleCloseModal();
        }
    }

    const handleCloseModalKeyDown = ({ code }) => {
        if (code === 'Escape') {
            // setShowModal(false);
            handleCloseModal();
        }
    }

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

                            {images.map((item, index, images) => {
                                if (index < 6) {
                                    return (
                                        <li className={scss.item} key={item.id} onClick={() => handleOpenModal(item)}>
                                        {/* <li className={scss.item} key={item.id} onClick={() => handleOpenModal(item.id)}> */}
                                            <picture>
                                                <source srcSet={`${item.imageWEBP_1x} 1x, ${item.imageWEBP_2x} 2x`} type="image/webp" />
                                                <source srcSet={`${item.imageJPG_1x} 1x, ${item.imageJPG_2x} 2x`} type="image/jpg" />
                                                <img src={`${item.imageJPG_1x} 1x`} srcSet={`${item.imageJPG_2x} 2x`} alt={item.title} title={item.title} width="280"/>
                                            </picture>
                                        </li>
                                    )}
                                }
                            )}

                        </ul>

                        {showModal && <Slider 
                            onCloseModal={handleCloseModal} 
                            handleCloseModalBackdrop={handleCloseModalBackdrop} 
                            handleCloseModalKeyDown={handleCloseModalKeyDown} 
                            // id={imageId} 
                            // images={imagesList}
                            prevHandlerImage={prevHandlerImage}
                            nextHandlerImage={nextHandlerImage}
                            image={image} />}

                </div>
            </div>
        </section>
    );
}

export default Cases;