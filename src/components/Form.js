import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [password2Error, setPassword2Error] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!emailPattern.test(e.target.value)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    } else if (e.target.name === 'password') {
      if (e.target.value.length < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    } else {
      if (e.target.value !== formData.password) {
        setPassword2Error(true);
      } else {
        setPassword2Error(false);
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && !password2Error) {
      alert('Form submitted successfully.');
      setFormData({
        email: '',
        password: '',
        password2: '',
      });
      setEmailError(true);
      setPasswordError(true);
      setPassword2Error(true);
    } else {
      alert('Form Submit Error - Please enter valid inputs.');
    }
  };

  return (
    <div className="form-validation">
      <h1>Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <div className="input-group">
            <input
              className={emailError && 'input-error'}
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            {emailError && <small>Enter valid email address.</small>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <div className="input-group">
            <input
              className={passwordError && 'input-error'}
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
            {passwordError && (
              <small>Password should be 8 characters or more.</small>
            )}
          </div>
          {showPassword ? (
            <FaEyeSlash onClick={() => setShowPassword(false)} />
          ) : (
            <FaEye onClick={() => setShowPassword(true)} />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password: </label>
          <div className="input-group">
            <input
              className={password2Error && 'input-error'}
              type="password"
              name="password2"
              id="password2"
              placeholder="Confirm Password"
              value={formData.password2}
              onChange={(e) => handleChange(e)}
            />
            {password2Error && <small>Passwords do not match.</small>}
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
