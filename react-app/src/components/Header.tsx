import { Link, Outlet } from 'react-router-dom';
import { SearchBar } from './SearchBar';

function Header(props: any) {

  return (
     <>
      <header className="header">
        <div className='header__wrapper'>
          <nav>
            <ul className='header__list'>
              <li className='header__list-item'>
                <Link to="/">Home</Link>
              </li>
              <li className='header__list-item'>
                <Link to="/about">About Us</Link>
              </li>
              <li className='header__list-item'>
                <Link to="/forms">Forms</Link>
              </li>
            </ul>
          </nav>
          <SearchBar 
            loading={props.loading} 
            setLoading={props.setLoading}>
          </SearchBar>
        </div>
      <Outlet />
      </header>
    </>
  )
}

export default Header;