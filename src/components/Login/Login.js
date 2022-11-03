import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './Login.css';

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='container login'>
      <div className='form-container'>
        <h1 className='login__title'>Please Login</h1>
        <form onSubmit={handleLogin}>
          <div className='input__group'>
            <label htmlFor='input__label'>Email</label>
            <input id='input__field' className='input__field' type='text' name='email' required />
          </div>
          <div className='input__group'>
            <label htmlFor='input__label'>Password</label>
            <input id='input__field' className='input__field' type='password' name='password' required />
          </div>
          <Link to='' className='link-btn'>
            forget password?
          </Link>
          <Link to='/signup' className='link-btn'>
            new to ema zone?
          </Link>
          <button type='submit' className='login-btn'>
            Log In
          </button>
        </form>
        <p className='or'>Or</p>
        <button className='login-btn google'>Continue With Google</button>
      </div>
    </div>
  );
};
export default Login;
