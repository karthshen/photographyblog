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

// core components

function SummaryPageHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div
                className="page-header page-header-xxs"
                data-parallax={true}
                ref={pageHeader}
                style={{
                    backgroundImage: "url(" + require("assets/img/front-page-background.jpg") + ")",
                }}
            >

                <div style={{
                    pointerEvents: 'none'
                }} className="filter" />

                {/* <Container>
                    <div className="motto text-center">
                        <h1>IN</h1>
                        <h3>This is a page for photos.</h3>
                        <br />
                    </div>
                </Container> */}
            </div>

        </>
    );
}

export default SummaryPageHeader;
