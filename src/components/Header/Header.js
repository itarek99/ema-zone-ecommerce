import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
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
        </ul>
      </nav>
    </div>
  );
}
export default Header;
