import './header.css';
import Nav from './nav/nav';

function Header(){

    return<>     
        <header>
            <h2 className='header-h2'>Ja<span className='header-h2-span'>sss</span>Food</h2>
            <Nav/>
        </header>
    </>
}

export default Header;