import React from "react";

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

import SummaryPageHeader from "components/Headers/SummaryPageHeader.js";
import DropdownRender from "components/Navbars/dropdownNavbar";


function SuccessfulSubmitPage() {
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
            <SummaryPageHeader />

                <div style={{textAlign: "center", padding: "10px"}}>
                        <h1>
                            Thank you!
                        </h1>
                        <h4>
                            I will reach out to you within 24-48 hours.
                        </h4>
                </div>
        </>
    )
};

export default SuccessfulSubmitPage;