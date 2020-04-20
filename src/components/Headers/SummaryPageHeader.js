/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import ExampleImage from "views/examples/ExampleImage";
import portraitImgCover from '../../assets/img/portraits/cover.jpg'
import landscapeImgCover from '../../assets/img/landsacpe/cover.jpg'
import streetImgCover from '../../assets/img/streets/cover.jpg'
import starImgCover from '../../assets/img/stars/cover.jpg'

// core components

function SummaryPageHeader() {
    let pageHeader = React.createRef();

    const portraitCover = [
        {
            src: portraitImgCover,
            //sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
            width: 2,
            height: 3
        }
    ];

    const landscapeCover = [
        {
            src: landscapeImgCover,
            //sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
            width: 2,
            height: 3
        }
    ];

    const streetCover = [
        {
            src: streetImgCover,
            //sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
            width: 2,
            height: 3
        }
    ];

    const starCover = [
        {
            src: starImgCover,
            //sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
            width: 2,
            height: 3
        }
    ];

    const pictureStyle = {
        //display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "36px",
        position: "relative",
        //flexWrap: "wrap",
        top: 20,
        width: '400px',
    };

    // React.useEffect(() => {
    //     if (window.innerWidth < 991) {
    //         const updateScroll = () => {
    //             let windowScrollTop = window.pageYOffset / 3;
    //             pageHeader.current.style.transform =
    //                 "translate3d(0," + windowScrollTop + "px,0)";
    //         };
    //         window.addEventListener("scroll", updateScroll);
    //         return function cleanup() {
    //             window.removeEventListener("scroll", updateScroll);
    //         };
    //     }
    // });

    return (
        <>
            <div
                className="page-header"
                data-parallax={true}
                ref={pageHeader}
                style={{
                    backgroundImage: "url(" + require("assets/img/portrait-page-background-dim.jpg") + ")",
                    display: "flex",
                    flexDirection: 'row',
                    flexWrap: 'nowrap'
                }}
            >
                <div
                    style={pictureStyle}
                >
                    <ExampleImage title={"Portrait"} photos={portraitCover} />
                </div>

                <div
                    style={pictureStyle}
                >
                    <ExampleImage title={"Landscape"} photos={landscapeCover} />
                </div>

                <div
                    style={pictureStyle}
                >
                    <ExampleImage title={"Streets"} photos={streetCover} />
                </div>

                <div
                    style={pictureStyle}
                >
                    <ExampleImage title={"Stars"} photos={starCover} />
                </div> */


                {/* <div style={{
                    pointerEvents: 'none'
                }} className="filter" /> */}

                {/* <Container>
                    <div className="motto text-center">
                        <h1>IN</h1>
                        <h3>This is a page for photos.</h3>
                        <br />
                    </div>
                </Container> */}
                <h6 className="category category-absolute">
                    Designed by{" "}
                    <a
                        href="https://karthshen.github.io"
                        target="_blank"
                    >
                        <img
                            alt="..."
                            className="shen-watermark-logo"
                            src={require("assets/img/shenwatermark.png")}
                        />
                    </a>
                </h6>
            </div>

        </>
    );
}

export default SummaryPageHeader;
