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

import SingleImage from "components/Images/SingleImage.js";

// core components
import SummaryPageHeader from "components/Headers/SummaryPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FrontPageNavbar from "components/Navbars/FrontPageNavbar";
import DropdownRender from "components/Navbars/dropdownNavbar"

// Pictures
import portraitImgCover from '../../assets/img/portraits/cover.jpg'
import landscapeImgCover from '../../assets/img/landscapes/cover.jpg'
import streetImgCover from '../../assets/img/streets/cover.jpg'
import starImgCover from '../../assets/img/stars/cover.jpg'
import urbanImgCover from '../../assets/img/urban/cover.jpg'
import weddingImgCover from '../../assets/img/weddings/cover.jpg'
import Routes from "components/Routes/Routes";

import React, { Component } from 'react'

import * as Utility from '../../components/Helpers/Utility'

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


class SummaryPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        document.documentElement.classList.remove("nav-open");
    }

    componentDidUpdate() {
        // React.useEffect(() => {
        //     document.body.classList.add("summary-page");
        //     return function cleanup() {
        //         document.body.classList.remove("summary-page");
        //     };
        // });
    }

    render() {
        return (
            <>
                <DropdownRender />
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
                        <SingleImage title={"Portrait"} photos={portraitCover} destination={Utility.DEFAULT_URL + "/Portrait-Page"} />
                    </div>

                    <div
                        style={pictureStyle}
                    >
                        <SingleImage title={"Landscape"} photos={landscapeCover} destination={Utility.DEFAULT_URL + "/Landscape-Page"} />
                    </div>

                    <div
                        style={pictureStyle}
                    >
                        <SingleImage title={"Streets"} photos={streetCover} destination={Utility.DEFAULT_URL + "/Street-Page"} />
                    </div>

                    <div
                        style={pictureStyle}
                    >
                        <SingleImage title={"Stars"} photos={starCover} destination={Utility.DEFAULT_URL + "/Star-Page"} />
                    </div>

                    <div
                        style={pictureStyle}
                    >
                        <SingleImage title={"Urban"} photos={urbanCover} destination={Utility.DEFAULT_URL + "/Urban-Page"} />
                    </div>

                    <div
                        style={pictureStyle}
                    >
                        <SingleImage title={"Wedding"} photos={weddingCover} destination={Utility.DEFAULT_URL + "/Wedding-Page"} />
                    </div>
                </div>
                {/* Footer */}
                {/* <DemoFooter /> */}
            </>
        )
    }
}

export default SummaryPage
