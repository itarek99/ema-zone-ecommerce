import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './SignUp.css';

const SignUp = () => {
  const [error, setError] = useState(false);
  const { createUserWithEmail } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError(true);
      return;
    }

    createUserWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(email, password);
  };

  return (
    <div className='container login'>
      <div className='form-container'>
        <h1 className='login__title'>Sign Up Now</h1>
        <form onSubmit={handleSubmit}>
          <div className='input__group'>
            <label htmlFor='input__label'>Name</label>
            <input id='input__field' className='input__field' type='text' name='name' />
          </div>
          <div className='input__group'>
            <label htmlFor='input__label'>Email</label>
            <input id='input__field' className='input__field' type='email' name='email' required />
          </div>
          <div className='input__group'>
            <label htmlFor='input__label'>Password</label>
            <input
              id='input__field'
              className={`input__field ${error ? 'error' : null}`}
              type='password'
              name='password'
              required
            />
          </div>
          <Link className='link-btn' to='/login'>
            already have an account?
          </Link>
          <button type='submit' className='login-btn'>
            Sign Up
          </button>
        </form>
        <p className='or'>Or</p>
        <button className='login-btn google'>Create With Google</button>
      </div>
    </div>
  );
};
export default SignUp;
