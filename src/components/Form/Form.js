import React, { useReducer, useState } from 'react';
import FormReducer from './FormReducer';
const Form = ({ title }) => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    hasConsented: false,
  };

  const [formState, dispatch] = useReducer(FormReducer, initialState);
  const [myTitle] = useState(title);

  //These are the values that would be sent to backend
  const { email, username, hasConsented } = formState;

  const handleUsernameChange = (e) => {
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const emailHandler = (e) => {
    dispatch({
      type: 'HANDLE_EMAIL_INPUT',
      field: e.target.name,
      payload: e.target.value,
    });
  };
  const hasConsentedHandler = (e) => {
    dispatch({
      type: 'TOGGLE_HAS_CONSENTED',
      field: e.target.name,
      payload: e.target.checked,
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    if (hasConsented) return;
    if (!hasConsented) {
      alert(`{ ${email}, ${username}}`);
    }
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <label htmlFor={myTitle}>
          {' '}
          {myTitle}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => handleUsernameChange(e)}
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            value={email}
            onChange={(e) => emailHandler(e)}
            name="email"
          />
        </label>
        <label htmlFor="Toggle">
          <input
            type="checkbox"
            value={hasConsented}
            onChange={(e) => hasConsentedHandler(e)}
            name="consent"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p> {email}</p>
      <p> {username}</p>
      {hasConsented === true ? <p> Yaaayyy!!!</p> : <p>wait</p>}
    </div>
  );
};

export default Form;
