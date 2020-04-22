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
    maxWidth: '90vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 10,
};

class PortraitPage extends Component {

    state = {
        images: []
    };

    importImages = (r, orientation) => {
        let images = [];
        let i = 0;
        var width = 1, height = 1;
        switch (orientation) {
            case 'vertical':
                { width = 2; height = 3; }
                break;
            case 'horizontal':
                { width = 3; height = 2; }
                break;
            case 'square':
                { width = 1; height = 1; }
                break;
            default:
        }

        r.keys().map((item) => {

            images[i] = {
                src: r(item),
                width: width,
                height: height
            };
            i++;
        });
        return images;
    }

    shuffle = (arr) => {

        var currentIndex = arr.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }

        return arr;

    };


    constructor(props) {
        super(props)
        // this.state = {
        //     images: this.importImages(require.context('../../assets/img/portraits/lowerRes/', false, /\.(png|jpe?g|svg)$/))
        // }
    }

    componentDidMount() {
        var arr = [];
        arr = arr.concat(this.importImages(require.context('../../assets/img/portraits/lowerRes/vertical/', false, /\.(png|jpe?g|svg)$/), "vertical"));
        arr = arr.concat(this.importImages(require.context('../../assets/img/portraits/lowerRes/horizontal/', false, /\.(png|jpe?g|svg)$/), "horizontal"));
        arr = arr.concat(this.importImages(require.context('../../assets/img/portraits/lowerRes/square/', false, /\.(png|jpe?g|svg)$/), "square"));
        arr = this.shuffle(arr);
        this.setState({ images: arr });
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
