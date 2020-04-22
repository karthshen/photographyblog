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

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import FrontPageNavbar from "components/Navbars/FrontPageNavbar";
import SummaryPageHeader from "components/Headers/SummaryPageHeader";
import React, { Component } from 'react'
import GridImageLightbox from "components/Images/GridImageLightbox";


const pictureStyle = {
    //display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "12px",
    position: "relative",
    //flexWrap: "wrap",
    maxWidth: '90vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 20,
};

class PortraitPage extends Component {

    state = {
        images: []
    };

    importImages = (r) => {
        let images = [];
        let i = 0;
        this.setState({ images: [] });

        r.keys().map((item) => {
            let img = new Image();
            img.src = r(item);

            images[i] = {
                src: r(item),
                width: img.naturalWidth,
                height: img.naturalHeight
            };

            if (images[i].width === 0) {
                console.error("We are fucked");
            }

            // console.log("Set dimesions for ", r(item), img.width, img.height);
            // console.log(images[i]);

            i++;
        });
        return images;
    }


    constructor(props) {
        super(props)
        // this.state = {
        //     images: this.importImages(require.context('../../assets/img/portraits/lowerRes/', false, /\.(png|jpe?g|svg)$/))
        // }
    }

    componentDidMount() {
        this.setState({ images: this.importImages(require.context('../../assets/img/portraits/lowerRes/', false, /\.(png|jpe?g|svg)$/)) });
    }

    render() {
        return (
            <>
                <FrontPageNavbar />
                <SummaryPageHeader />
                <div style={pictureStyle}>
                    <GridImageLightbox photos={this.state.images} />
                </div>
                {/* <DemoFooter /> */}
            </>
        )
    }
}

export default PortraitPage
