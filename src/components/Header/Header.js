import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './Header.css';

function Header() {
  const { user, userSignOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        console.log('logout');
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='header'>
      <nav className='nav-bar container'>
        {/* <img src={logo} alt='company logo' /> */}
        <Link className='nav-link' to='/'>
          <h2 className='band-logo'>Ema Zone</h2>
        </Link>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Link className='nav-link' to='/orders'>
              Orders
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/inventory'>
              Inventory
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
          <li className='user-email'>{user?.email}</li>
          {user && user?.uid ? (
            <li className='nav-item'>
              <button onClick={handleLogOut} className='logout-btn'>
                Logout
              </button>
            </li>
          ) : (
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
export default Header;
