import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../hooks/use-auth';
import './LoginForm.scss';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();

  let history = useHistory();
  let auth = useAuth();

  const onSubmit = (data) => {
    auth.signin(data.email, data.password, () => {
      history.replace({ pathname: '/classes' });
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Form.Text className="text-danger">{errors.email.message}</Form.Text>
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
              message: 'Password is required',
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
      <Button type="submit" variant="primary" className="btn-lg">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
