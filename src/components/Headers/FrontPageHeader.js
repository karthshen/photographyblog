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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button, Row, Col } from "reactstrap";

import history from '../Routes/history'
import Routes from "../Routes/Routes"
import * as Utility from '../Helpers/Utility'

function FrontPageHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/front-page-background-sm.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title text-center">A Simple Page</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              A Very Simple Page In the Very Early Stage
            </h2>
          </Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "24px",
              position: "relative",
              top: 20
            }}
          >
            <Button
              className="btn-round mr-1"
              outline
              size="lg"
              color="neutral"
              type="button"
              onClick={() => {
                history.push(Utility.DEFAULT_URL + "/Summary-Page");
                //history.push("/Portrait-Page");
              }}
            >
              In
            </Button>
          </div>
        </div>
        <div
          className="moving-clouds"
          style={{
            pointerEvents: 'none',
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
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

export default FrontPageHeader;
