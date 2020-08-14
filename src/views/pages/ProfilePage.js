/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=====================================================rofi====

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FrontPageNavbar from "components/Navbars/FrontPageNavbar";
import DropdownRender from "components/Navbars/dropdownNavbar";
import * as Utility from '../../components/Helpers/Utility';
import InstagramEmbed from 'react-instagram-embed';


function ProfilePage() {
    const [activeTab, setActiveTab] = React.useState("1");

    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    });
    return (
        <>
            <DropdownRender />
            <ProfilePageHeader />
            <div className="section profile-content">
                <Container>
                    <div className="owner">
                        <div className="avatar">
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src="https://karthshen.github.io/img/avatar-hux.jpg"
                            />
                        </div>
                        <div className="name">
                            <h4 className="title">
                                Karth <br />
                            </h4>
                            <h6 className="description">
                                📸 Photographer   
                                💻 Software Engineer   
                                🐊 UF Alumni  
                            </h6>
                        </div>
                    </div>
                    <br />
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="6">
                            <p>
                                An artist of considerable range, Karth. Enjoy my vision, feel the form, and experience the art. Let me know if you want to be apart of it. Peace.
                            </p>
                            <br />
                            <Button className="btn-round" color="default" href={Utility.DEFAULT_URL + "/BookMe-Page"} outline> 
                                Book Me
                            </Button>
                        </Col>
                    </Row>
                    <br />

                </Container>
            </div>
            <InstagramEmbed
                url={'https://www.instagram.com/karthshen/'}
                maxWidth={1000}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
            <DemoFooter />
        </>
    );
}

export default ProfilePage;
