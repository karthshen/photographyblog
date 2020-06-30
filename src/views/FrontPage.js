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

// core components
import FrontPageNavbar from "components/Navbars/FrontPageNavbar.js";
import FrontPageHeader from "components/Headers/FrontPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import DropdownRender from "components/Navbars/dropdownNavbar";


import React, { Component } from 'react';

class FrontPage extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    document.documentElement.classList.remove("nav-open");
  }

  componentDidUpdate() {
    React.useEffect(() => {
      document.body.classList.add("index");
      return function cleanup() {
        document.body.classList.remove("index");
      };
    });

  }


  render() {
    return (
      <>
        <DropdownRender />
        <FrontPageHeader />
        <div className="main">
          {/*<SectionButtons />
         <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />
        <DemoFooter /> */}
        </div>
      </>
    )
  }
}

export default FrontPage;