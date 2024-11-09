import React from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import DropdownListField from "../DropdownListField/DropdownListField";
import BtnSubmit from "../BtnSubmit/BtnSubmit";
import FieldLabel from "../FieldLabel/FieldLabel";
import _ from "lodash";
import "./ContactForm.scss";

const MINIMUM_FOR_TRAVEL = 4;

const categories = [
  { category: "Event", value: "event" },
  { category: "Bridal", value: "bridal" },
];

function validate(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name - Required:";
  }

  if (!values.mobile) {
    errors.mobile = "Mobile - Required:";
  }

  if (!values.email) {
    errors.email = "Email - Required:";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email - Invalid email address:";
  }

  if (!values.eventDate) {
    errors.eventDate = "Date of event/wedding - Required:";
  }

  if (!values.serviceType) {
    errors.serviceType = "Service you're booking - Required:";
  }

  if (!values.totalPeopleMakeup) {
    errors.totalPeopleMakeup = "Number of people for makeup - Required:";
  }

  if (!values.totalPeopleHair) {
    errors.totalPeopleHair = "Number of people for hair - Required:";
  }

  if (!values.timeToFinish) {
    errors.timeToFinish = "Time you need to be ready - Required:";
  }

  if (
    values.totalPeopleMakeup > MINIMUM_FOR_TRAVEL - 1 &&
    !values.applicationAddress
  ) {
    errors.applicationAddress = "Location for service - Required:";
  }

  return errors;
}

function peopleNumLimitMakeup(value) {
  if (value === "") {
    return "";
  } else if (value < 0) {
    return 0;
  } else if (value > 1000) {
    return 1000;
  } else {
    return value;
  }
}

function peopleNumLimitHair(value) {
  if (value === "") {
    return "";
  } else if (value < 0) {
    return 0;
  } else if (value > 1000) {
    return 1000;
  } else {
    return value;
  }
}

function renderField({
  autoFocus,
  placeholder,
  input,
  type,
  label,
  number1,
  meta: { touched, error },
}) {
  if (input.name === "applicationAddress") {
    return (
      <div className="text-field">
        <FieldLabel touched={touched} label={label} error={error} />
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          disabled={!(parseInt(number1) > MINIMUM_FOR_TRAVEL - 1)}
        />
      </div>
    );
  } else {
    return (
      <div className="text-field">
        <FieldLabel touched={touched} label={label} error={error} />
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
        />
      </div>
    );
  }
}

function renderDropdownListField({
  placeholder,
  input,
  label,
  meta: { touched, error },
}) {
  return (
    <div className="dropdown-list-field">
      <FieldLabel touched={touched} label={label} error={error} />
      <div>
        <DropdownListField
          placeholder={placeholder}
          input={input}
          data={categories}
          valueField="value"
          textField="category"
        />
      </div>
    </div>
  );
}

function renderTextArea({
  autoFocus,
  placeholder,
  input,
  type,
  label,
  meta: { touched, error },
}) {
  return (
    <div className="text-area-field">
      <FieldLabel touched={touched} label={label} error={error} />
      <textarea
        {...input}
        type={type}
        className="textBox"
        placeholder={placeholder}
        autoFocus={autoFocus}
        rows="10"
        cols="50"
      />
    </div>
  );
}

function ContactForm(props) {
  const { handleSubmit, number1, number2, pristine, submitting, reset } = props;
  const addressPlaceHolder = "";
  const editingForm = useSelector(
    (state) => state.adminDashReducer.editingForm
  );
  const btnText = editingForm ? "Edit Contact Info" : "Send";

  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <Field
        type="text"
        component={renderField}
        label="Name:"
        name="name"
        tabIndex="1"
        autoFocus
      />
      <Field
        type="text"
        component={renderField}
        label="Mobile:"
        name="mobile"
        tabIndex="2"
      />
      <Field
        type="text"
        component={renderField}
        label="Email:"
        name="email"
        tabIndex="3"
      />
      <Field
        type="date"
        component={renderField}
        label="Date of event/wedding:"
        name="eventDate"
        tabIndex="4"
      />
      <Field
        name="serviceType"
        component={renderDropdownListField}
        data={categories}
        valueField="value"
        textField="category"
        label="Service you're booking:"
        tabIndex="5"
      />
      <p>
        <em>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </em>
      </p>
      <Field
        type="number"
        component={renderField}
        label="Number of people for makeup:"
        name="totalPeopleMakeup"
        tabIndex="6"
        placeholder="Makeup"
        normalize={peopleNumLimitMakeup}
      />
      <Field
        type="number"
        component={renderField}
        label="Number of people for hair:"
        name="totalPeopleHair"
        tabIndex="7"
        placeholder="Hair"
        normalize={peopleNumLimitHair}
      />
      <Field
        type="text"
        component={renderField}
        label="Time you need to be ready:"
        name="timeToFinish"
        tabIndex="8"
      />
      <Field
        type="text"
        component={renderField}
        label="Location for service:"
        name="applicationAddress"
        placeholder={addressPlaceHolder}
        number1={number1}
        number2={number2}
        tabIndex="9"
      />
      <Field
        type="text"
        component={renderField}
        label="How did you hear about me?"
        name="howDidYouHear"
        tabIndex="10"
      />
      <Field
        type="text"
        component={renderTextArea}
        label="Any additional information:"
        name="addedQuestionsOrInfo"
        tabIndex="11"
      />
      <p className="editorial-contact-instruction">
        <em>
         
        </em>
      </p>
      <div className="btn-container">
        <button
          className="reset-btn btn"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear
        </button>
        <BtnSubmit pristine={pristine} submitting={submitting} text={btnText} />
      </div>
    </form>
  );
}

ContactForm = reduxForm({
  form: "ContactForm",
  validate,
})(ContactForm);

const selector = formValueSelector("ContactForm");
ContactForm = connect((state) => {
  return {
    number1: selector(state, "totalPeopleMakeup"),
    number2: selector(state, "totalPeopleHair"),
  };
})(ContactForm);

export default ContactForm;
