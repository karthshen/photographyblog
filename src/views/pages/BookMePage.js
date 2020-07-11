import React, { Component } from 'react';
import * as Utility from 'components/Helpers/Utility';
import { validateFields } from 'components/Helpers/Validation';
import classnames from 'classnames';
import SummaryPageHeader from "components/Headers/SummaryPageHeader.js";
import DropdownRender from "components/Navbars/dropdownNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap";

const initialState = {
  email: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  name: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  submitCalled: false,
  allFieldsValidated: false,
};

class BookMePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  /*
   * validates the field onBlur if sumbit button is not clicked
   * set the validateOnChange to true for that field
   * check for error
   */
  handleBlur(validationFunc, evt) {
    const field = evt.target.name; //''
    // validate onBlur only when validateOnChange for that field is false
    // because if validateOnChange is already true there is no need to validate onBlur
    if (
      this.state[field].validateName === false &&
      this.state.submitCalled === false
    ) {
      this.setState(state => ({
        [field]: {
          ...state[field],
          validateOnChange: true,
          error: validationFunc(state[field].value)
        }
      }));
    }
    return;
  }

  /*
   * update the value in state for that field
   * check for error if validateOnChange is true
   */
  handleChange(validationFunc, evt, evtType) {
    const field = evtType; //name email
    const fieldVal = evt.target.value;
    console.log(evt);
    this.setState(state => ({
      [field]: {
        ...state[field],
        value: fieldVal,
        error: state[field].validateName ? validationFunc(fieldVal) : ''
      }
    }));
  }

  /*
   * validate all fields
   * check if all fields are valid if yes then submit the Form
   * otherwise set errors for the feilds in the state
   */
  handleSubmit(evt) {
    evt.preventDefault();
    // validate all fields
    const { email, name } = this.state;
    const emailError = validateFields.validateEmail(email.value);
    const nameError = validateFields.validateName(name.value);
    if ([emailError, nameError].every(e => e === false)) {
      // no errors submit the form
      console.log('success');

      // clear state and show all fields are validated
      this.setState({ ...initialState, allFieldsValidated: true });
      this.showAllFieldsValidated();
      window.location.pathname = "/SuccessfulSubmit-Page"
    } else {
      // update the state with errors
      this.setState(state => ({
        email: {
          ...state.email,
          validateOnChange: true,
          error: emailError
        },
        name: {
          ...state.name,
          validateOnChange: true,
          error: nameError
        }
      }));
      window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
     });    }
  }

  showAllFieldsValidated() {
    setTimeout(() => {
      this.setState({ allFieldsValidated: false });
    }, 1500);
  }

  render() {
    const { email, name, allFieldsValidated } = this.state;
    return (
      <>
        <DropdownRender />
        <SummaryPageHeader />
        <form action="https://formspree.io/cody.nelson4@yahoo.com" method="post" onSubmit={evt => this.handleSubmit(evt)} style={
          {
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            position: "relative",
            alignSelf: 'center',
            maxWidth: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }
        } >

          <Form.Row>
            <Form.Group as={Col} controlId="formGridName" onChange={evt => this.handleChange(validateFields.validateName, evt, 'name')}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" value={name.value} className={classnames('form-control', { 'is-valid': name.error === false }, { 'is-invalid': name.error })}/>
              <div className="invalid-feedback">{name.error}</div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" onChange={evt => this.handleChange(validateFields.validateEmail, evt, 'email')}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email.value} className={classnames('form-control', { 'is-valid': email.error === false }, { 'is-invalid': email.error })}/>
              <div className="invalid-feedback">{email.error}</div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phone number" placeholder="Enter phone number" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="event date" placeholder="Enter event date" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Event Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Event Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Event City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Event State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Form.Control >
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Event Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Event Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Anything Else You'd Like Me To Know?</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button type="submit" variant="transparent" onMouseDown={() => this.setState({ submitCalled: true })}>Submit</Button>
        </form>
      </>
    );
  }
}

export default BookMePage;