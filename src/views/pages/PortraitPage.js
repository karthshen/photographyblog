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

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import FrontPageNavbar from "components/Navbars/FrontPageNavbar";
import SummaryPageHeader from "components/Headers/SummaryPageHeader";
import React, { Component } from 'react'
import GridImageLightbox from "components/Images/GridImageLightbox";
import * as Utility from "components/Helpers/Utility"


class PortraitPage extends Component {

    state = {
        images: [],
        window_width: 0,
        window_height: 0,
        window_maxWidth: ''
    };

    determineBorder() {
        if (this.state.window_height > this.state.window_width) {
            this.setState({ window_maxWidth: Utility.VERTICAL_MAXWIDTH });
        } else {
            this.setState({ window_maxWidth: Utility.HORIZONTAL_MAXWIDTH });
        }
    }

    iumportAllImages() {
        // This cannot be encapsulated because the nature of Javascript. 
        var arr = [];
        arr = arr.concat(Utility.importImages(require.context('../../assets/img/portraits/lowerRes/vertical/', false, /\.(png|jpe?g|svg)$/), "vertical"));
        arr = arr.concat(Utility.importImages(require.context('../../assets/img/portraits/lowerRes/horizontal/', false, /\.(png|jpe?g|svg)$/), "horizontal"));
        arr = arr.concat(Utility.importImages(require.context('../../assets/img/portraits/lowerRes/square/', false, /\.(png|jpe?g|svg)$/), "square"));
        arr = Utility.shuffle(arr);
        return arr;
    }


    constructor(props) {
        super(props)
        // this.state = {
        //     images: this.importImages(require.context('../../assets/img/portraits/lowerRes/', false, /\.(png|jpe?g|svg)$/))
        // }
        Utility.updateWindowDimensions(this.state);
    }



    componentDidMount() {
        this.setState({ images: this.iumportAllImages("") });
        this.determineBorder();
    }


    render() {
        ;

        if (this.state.window_height != window.outerHeight || this.state.window_width != window.outerWidth) {
            this.setState({ window_height: window.outerHeight, window_width: window.outerWidth });
            this.determineBorder();
        }

        return (
            <>
                <FrontPageNavbar />
                <SummaryPageHeader />
                <div style={Utility.getGridStyle(this.state.window_maxWidth)}>
                    <GridImageLightbox photos={this.state.images} />
                </div>
                {/* <DemoFooter /> */}
            </>
        )
    }
}

export default PortraitPage
