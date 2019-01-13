import React from 'react';
import { Redirect } from 'react-router-dom';

const Form = props => {
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1 className="title is-1">{props.formType}</h1>
      <hr />
      <br />
      <form onSubmit={event => props.handleUserFormSubmit(event)}>
        {props.formType === 'Register' && (
          <div className="field">
            <input
              type="text"
              name="username"
              className="input is-medium"
              placeholder="Enter a username"
              value={props.formData.username}
              onChange={props.handleFormChange}
              required
            />
          </div>
        )}
        <div className="field">
          <input
            type="email"
            name="email"
            className="input is-medium"
            placeholder="Enter an email address"
            value={props.formData.email}
            onChange={props.handleFormChange}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            className="input is-medium"
            placeholder="Enter a password"
            value={props.formData.password}
            onChange={props.handleFormChange}
            required
          />
        </div>
        <input
          type="submit"
          className="button is-primary is-medium is-fullwidth"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Form;
