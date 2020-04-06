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

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

function portraitPage() {
    document.documentElement.classList.remove("nav-open");
    // React.useEffect(() => {
    //     document.body.classList.add("portrait-page");
    //     return function cleanup() {
    //         document.body.classList.remove("portrait-page");
    //     };
    // });
    return (
        <>
            <IndexNavbar />
            <LandingPageHeader />
            {/* <DemoFooter /> */}
        </>
    );
}

export default portraitPage;
