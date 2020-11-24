import React from "react";
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../hooks/use-auth';
import './RegisterForm.scss';


const RegisterPage = () => {
    const { register, handleSubmit, errors, getValues } = useForm();

    let history = useHistory();
    let auth = useAuth();
  
    const onSubmit = (data) => {
      auth.signup(
        data.name,
        data.email,
        data.password,
        data.confirmPassword,
        () => {
          history.replace({ pathname: '/classes' });
        }
      );
      console.log(data);
    };
  
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName" className="login-form-group">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            ref={register({
              required: {
                value: true,
                message: 'Name is required to register',
              },
            })}
          />
          {errors.name && (
            <Form.Text className="text-danger">{errors.name.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="formEmail" className="login-form-group">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            ref={register({
              required: { value: true, message: 'Email is required' },
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Your email is not valid',
              },
            })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="formPassword" className="login-form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            ref={register({
              required: {
                value: true,
                message: 'Password is required to register',
              },
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
            })}
          />
          {errors.password && (
            <Form.Text className="text-danger">
              {errors.password.message}
            </Form.Text>
          )}
        </Form.Group>
        {/* -----Confirm password input value must match password input value----- */}
        <Form.Group controlId="formPasswordtwo" className="login-form-group">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            ref={register({
              required: {
                value: true,
                message: 'Password is required to register',
              },
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
              validate: {
                confirmPassword: (value) =>
                  value === getValues().password || 'Password does not match',
              },
            })}
          />
          {errors.confirmPassword && (
            <Form.Text className="text-danger">
              {errors.confirmPassword.message}
            </Form.Text>
          )}
        </Form.Group>
        <Button type="submit" variant="primary" className="btn-lg">
          Register
        </Button>
      </Form>
    );
};

export default RegisterPage;