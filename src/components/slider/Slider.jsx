import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop } from '../backdrop/Backdrop';

// import Swiper from 'swiper';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Navigation, Mousewheel, EffectFade, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

import previoslyImage from '../../images/slider/prev.png';
import nextImage from '../../images/slider/next.png';
import loadingImage from '../../images/slider/loading.gif';
import closeButton from '../../images/slider/close.png';

import scss from './Slider.module.scss';

export const Slider = ({ onCloseModal, handleCloseModalBackdrop, handleCloseModalKeyDown, id, images, image, prevHandlerImage, nextHandlerImage }) => {
    // const swiper = useSwiper();
    // const swiperRef = useRef();

    const [isLoadingImage, setIsLoadingImage] = useState(false);
    // const [image, setImage] = useState(null);
    const [isDisactiveButtonPrev, setIsDisactiveButtonPrev] = useState(false);
    const [isDisactiveButtonNext, setIsDisactiveButtonNext] = useState(false);

    // useEffect(() => {
    //     if (image) {
    //         setIsLoadingImage(false);
    //     } else {
    //         setIsLoadingImage(true);
    //         setImage(imageItem);
    //     }
    // }, [image, setImage, ]);

    useEffect(() => {
        if (image && image.id === 1) {
            setIsDisactiveButtonPrev(true);
            setIsDisactiveButtonNext(false);
        } else if (image && image.id === 8) {
            setIsDisactiveButtonPrev(false);
            setIsDisactiveButtonNext(true);
        }
    }, [image, setIsDisactiveButtonPrev, setIsDisactiveButtonNext]);

    useEffect(() => {
        const backdropElement = document.querySelector('#close-slider');
        // console.log(backdropElement);
        backdropElement.focus();
    }, []);

    const changeImage = (mode) => {
        try {
            if (mode === 'prev') {
                // setImage(null);
                setIsLoadingImage(true);
                setTimeout(async () => {
                    const result = await prevHandlerImage(image.id);
                    // console.log(result);
                    if (!result && result !== undefined) {
                        setIsDisactiveButtonPrev(true);
                        setIsDisactiveButtonNext(false);
                    } else {
                        setIsDisactiveButtonPrev(false);
                        setIsDisactiveButtonNext(false);
                    }
                    setIsLoadingImage(false);
                }, 1000);
            } else if (mode === 'next') {
                // setImage(null);
                setIsLoadingImage(true);
                setTimeout(async () => {
                    const result = await nextHandlerImage(image.id);
                    // console.log(result);
                    if (!result && result !== undefined) {
                        setIsDisactiveButtonPrev(false);
                        setIsDisactiveButtonNext(true);
                    } else {
                        setIsDisactiveButtonPrev(false);
                        setIsDisactiveButtonNext(false);
                    }
                    setIsLoadingImage(false);
                }, 1000);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return ReactDOM.createPortal(
        <Backdrop styles={scss.backdropModal} handleCloseModalBackdrop={handleCloseModalBackdrop} handleCloseModalKeyDown={handleCloseModalKeyDown}>
            <div className={scss.modal} id="modal">

                {/* <Swiper className={scss.list}
                        modules={[EffectFade, Navigation, Mousewheel, A11y]}
                        spaceBetween={3}
                        slidesPerView={1}
                        initialSlide={(id === 0 ? id : id - 1)}
                        effect={'fade'}
                        mousewheel={false}
                        onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}>
                    {images.map((item, index) =>
                        <SwiperSlide className={scss.item} key={item.id}>
                            <picture>
                                <source srcSet={`${item.imageWEBP_1x} 1x, ${item.imageWEBP_2x} 2x`} type="image/webp" />
                                <source srcSet={`${item.imageJPG_1x} 1x, ${item.imageJPG_2x} 2x`} type="image/jpg" />
                                <img className={scss.image} src={`${item.imageJPG_1x} 1x`} srcSet={`${item.imageJPG_2x} 2x`} alt={item.title} title={item.title} width="280"/>
                            </picture>
                        </SwiperSlide>
                    )}
                </Swiper>
                <button className={scss.buttonArrow} onClick={() => swiperRef.current.slidePrev()}>
                    <img className={scss.buttonArrowImage} src={previoslyImage} alt="Previosly image" title="Previosly image" width="50" type="image/png"/>
                </button>
                <button className={scss.buttonArrow} onClick={() => swiperRef.current.slideNext()}>
                    <img className={scss.buttonArrowImage} src={nextImage} alt="Next image" title="Next image" width="50" type="image/png"/>
                </button> */}

                {isLoadingImage || !image ? 
                    <div className={scss.loading}>
                        <img className={scss.loadingImage} src={loadingImage} alt="...Loading" title="...Loading" width="32" type="image/gif"/>
                    </div>
                    :
                    <picture>
                        <source srcSet={`${image.imageWEBP_1x} 1x, ${image.imageWEBP_2x} 2x`} type="image/webp" />
                        <source srcSet={`${image.imageJPG_1x} 1x, ${image.imageJPG_2x} 2x`} type="image/jpg" />
                        <img className={scss.image} src={`${image.imageJPG_1x} 1x`} srcSet={`${image.imageJPG_2x} 2x`} alt={image.title} title={image.title} width="280"/>
                    </picture>
                }

                <button className={scss.buttonArrow} onClick={() => changeImage('prev')} disabled={isDisactiveButtonPrev}>
                    <img className={scss.buttonArrowImage} src={previoslyImage} alt="Previosly slider" title="Previosly slider" width="50" type="image/png"/>
                </button>
                <button className={scss.buttonArrow} onClick={() => changeImage('next')} disabled={isDisactiveButtonNext}>
                    <img className={scss.buttonArrowImage} src={nextImage} alt="Next slider" title="Next slider" width="50" type="image/png"/>
                </button>

                {/* <ul className={scss.list}>
                    {images.map((item, index) =>
                        <li className={scss.item} key={item.id}>
                            <picture>
                                <source srcSet={`${item.imageWEBP_1x} 1x, ${item.imageWEBP_2x} 2x`} type="image/webp" />
                                <source srcSet={`${item.imageJPG_1x} 1x, ${item.imageJPG_2x} 2x`} type="image/jpg" />
                                <img className={scss.image} src={`${item.imageJPG_1x} 1x`} srcSet={`${item.imageJPG_2x} 2x`} alt={item.title} title={item.title} width="280"/>
                            </picture>
                        </li>
                    )}
                </ul> */}

                {/* <ul className={scss.list}>
                    {images.map((item, index) => {
                        if (index < 1) {
                            return (
                                <li className={scss.item} key={item.id}>
                                    <picture>
                                        <source srcSet={`${item.imageWEBP_1x} 1x, ${item.imageWEBP_2x} 2x`} type="image/webp" />
                                        <source srcSet={`${item.imageJPG_1x} 1x, ${item.imageJPG_2x} 2x`} type="image/jpg" />
                                        <img className={scss.image} src={`${item.imageJPG_1x} 1x`} srcSet={`${item.imageJPG_2x} 2x`} alt={item.title} title={item.title} width="280"/>
                                    </picture>
                                </li>
                            )}
                        }
                    )}
                </ul> */}

                <button className={scss.button} type='button' onClick={onCloseModal} id="close-slider">
                    <img src={closeButton} alt="Close slider" title="Close slider" width="27" type="image/png"/>
                </button>

            </div>
        </Backdrop>,
        document.body
    );
}

Slider.protoTypes = {
    onCloseModal: PropTypes.func,
    handleCloseModalBackdrop: PropTypes.func,
    handleCloseModalKeyDown: PropTypes.func,
    id: PropTypes.number,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            imageJPG_1x: PropTypes.string,
            imageJPG_2x: PropTypes.string,
            imageWEBP_1x: PropTypes.string,
            imageWEBP_2x: PropTypes.string,
            title: PropTypes.string
        })
    ),
    image: PropTypes.shape({
        id: PropTypes.number,
        imageJPG_1x: PropTypes.string,
        imageJPG_2x: PropTypes.string,
        imageWEBP_1x: PropTypes.string,
        imageWEBP_2x: PropTypes.string,
        title: PropTypes.string
    }),
    prevHandlerImage: PropTypes.func,
    nextHandlerImage: PropTypes.func,
};