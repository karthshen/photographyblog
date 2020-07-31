import React, { Component } from 'react';
import * as Utility from 'components/Helpers/Utility';
import { USStates } from 'components/Helpers/Utility';
import { validateFields } from 'components/Helpers/Validation';
import classnames from 'classnames';
import SummaryPageHeader from "components/Headers/SummaryPageHeader.js";
import DropdownRender from "components/Navbars/dropdownNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap";
import Select from 'react-select';
import emailjs from 'emailjs-com';
import 'components/Helpers/calendar-picker-indicator.css';

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
  date: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  zip: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  phone: {
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
    const { email, name, date, zip, phone } = this.state;
    const emailError = validateFields.validateEmail(email.value);
    const nameError = validateFields.validateName(name.value);
    const dateError = validateFields.validateDate(date.value);
    const zipError = validateFields.validateZip(zip.value);
    const phoneError = validateFields.validatePhone(phone.value);

    if ([emailError, nameError, dateError, zipError, phoneError].every(e => e === false)) {
      // no errors submit the form
      console.log('success');

      // clear state and show all fields are validated
      this.setState({ ...initialState, allFieldsValidated: true });
      this.showAllFieldsValidated();
      this.sendEmail(evt);
      if(this.sendEmail.isSuccess = true){
        window.location.pathname = "/SuccessfulSubmit-Page";
      } else {
        window.location.pathname = "/FailureSubmit-Page";
      }
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
        },
        date: {
          ...state.date,
          validateOnChange: true,
          error: dateError
        },
        zip: {
          ...state.zip,
          validateOnChange: true,
          error: zipError
        },
        phone: {
          ...state.phone,
          validateOnChange: true,
          error: phoneError
        }
      }));
      window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
      });
    }
  }

  sendEmail(e) {
    let isSuccess = false;

    emailjs.sendForm('gmail', 'Photography_Inquiry', e.target, 'user_fHhZ2ekVGcknqmHjBabXU')
      .then((result) => {
        console.log(result.text);
        isSuccess = true;
      }, (error) => {
        console.log(error.text);
        isSuccess = false;
      });

      return isSuccess
  }

  showAllFieldsValidated() {
    setTimeout(() => {
      this.setState({ allFieldsValidated: false });
    }, 1500);
  }

  render() {
    const { email, name, date, zip, phone, allFieldsValidated } = this.state;
    return (
      <>
        <DropdownRender />
        <SummaryPageHeader />
        <form
          method="post"
          onSubmit={evt => this.handleSubmit(evt)}
          style={
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
              <Form.Control name="user_name" type="name" placeholder="Enter name" value={name.value} className={classnames('form-control', { 'is-valid': name.error === false }, { 'is-invalid': name.error })} />
              <div className="invalid-feedback">{name.error}</div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" onChange={evt => this.handleChange(validateFields.validateEmail, evt, 'email')}>
              <Form.Label>Email</Form.Label>
              <Form.Control name="user_email" type="email" placeholder="Enter email" value={email.value} className={classnames('form-control', { 'is-valid': email.error === false }, { 'is-invalid': email.error })} />
              <div className="invalid-feedback">{email.error}</div>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone" onChange={evt => this.handleChange(validateFields.validatephone, evt, 'phone')}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="user_phone" type="phone number" placeholder="Enter phone number" value={phone.value} className={classnames('form-control', { 'is-valid': phone.error === false }, { 'is-invalid': phone.error })} />
              <div className="invalid-feedback">{phone.error}</div>
            </Form.Group>


            <Form.Group as={Col} controlId="formGridDate" onChange={evt => this.handleChange(validateFields.validateDate, evt, 'date')}>
              <Form.Label>Event Date</Form.Label>
              <br></br>
              <Form.Control
                type="date"
                name="event_date"
                value={date.value}
                className={classnames('form-control', { 'is-valid': date.error === false }, { 'is-invalid': date.error })}
              />
              <div className="invalid-feedback">{date.error}</div>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Event Address</Form.Label>
            <Form.Control name="event_address1" placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Event Address 2</Form.Label>
            <Form.Control name="event_address2" placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Event City</Form.Label>
              <Form.Control name="event_city" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Event State</Form.Label>
              <Select name="event_state" options={USStates} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip" onChange={evt => this.handleChange(validateFields.validateZip, evt, 'zip')}>
              <Form.Label>Event Zip</Form.Label>
              <Form.Control name="event_zip" type="zip code" value={zip.value} className={classnames('form-control', { 'is-valid': zip.error === false }, { 'is-invalid': zip.error })} />
              <div className="invalid-feedback">{zip.error}</div>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Event Description</Form.Label>
            <Form.Control name="event_description" as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Anything Else You'd Like Me To Know?</Form.Label>
            <Form.Control name="event_message" as="textarea" rows="3" />
          </Form.Group>

          <Button type="submit" value="Send" variant="transparent" onMouseDown={() => this.setState({ submitCalled: true })}>Submit</Button>
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
          <script type="text/javascript">
            (function(){
              emailjs.init("user_fHhZ2ekVGcknqmHjBabXU")};
            )();
        </script>
        </form>
      </>
    );
  }
}

export default BookMePage;