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
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

import ExampleImage from "views/examples/ExampleImage";

// core components
import SummaryPageHeader from "components/Headers/SummaryPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FrontPageNavbar from "components/Navbars/FrontPageNavbar";

// Pictures
import portraitImgCover from '../../assets/img/portraits/cover.jpg'
import landscapeImgCover from '../../assets/img/landsacpe/cover.jpg'
import streetImgCover from '../../assets/img/streets/cover.jpg'
import starImgCover from '../../assets/img/stars/cover.jpg'
import urbanImgCover from '../../assets/img/urban/cover.jpg'
import weddingImgCover from '../../assets/img/weddings/cover.jpg'


function summaryPage() {
    document.documentElement.classList.remove("nav-open");
    // React.useEffect(() => {
    //     document.body.classList.add("portrait-page");
    //     return function cleanup() {
    //         document.body.classList.remove("portrait-page");
    //     };
    // });
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

    const urbanCover = [
        {
            src: urbanImgCover,
            //sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
            width: 2,
            height: 3
        }
    ]

    const weddingCover = [
        {
            src: weddingImgCover,
            //sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
            width: 2,
            height: 3
        }
    ]

    const pictureStyle = {
        //display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "22px",
        position: "relative",
        //flexWrap: "wrap",
        top: -60,
        minWidth: '350px',
        maxWidth: '500px',
    };
    return (
        <>
            <FrontPageNavbar />
            <SummaryPageHeader />

            <div style={
                {
                    display: "flex",
                    justifyContent: "center",
                    //alignItems: "center",
                    //margin: "36px",
                    position: "relative",
                    flexWrap: 'wrap',
                    background: 'white',
                    alignSelf: 'center',
                    maxWidth: '1400px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }
            }
                className="section summary-section">
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
                </div>

                <div
                    style={pictureStyle}
                >
                    <ExampleImage title={"Urban"} photos={urbanCover} />
                </div>

                <div
                    style={pictureStyle}
                >
                    <ExampleImage title={"Wedding"} photos={weddingCover} />
                </div>
            </div>
            {/* Footer */}
            {/* <DemoFooter /> */}
        </>
    );
}

export default summaryPage;
