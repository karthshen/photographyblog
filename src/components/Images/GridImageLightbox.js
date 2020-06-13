import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Basic from './Blur';
//import './BlurEffect.css';

function GridImageLightbox({ photos }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
        //Basic.renderBlurView('xlight');
        //Basic.blurType(xlight, 20);
        Basic.setBackgroundXlight();
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            {/* <h2>Using with a Lightbox component</h2> */}
            < Gallery photos={photos} onClick={openLightbox} direction="row" />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div >
    );
}

export default GridImageLightbox;
