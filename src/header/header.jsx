import './header.css';
import Nav from './nav/nav';

function Header(){

    return<>     
        <header>
            <h2 className='header-h2'>F<span className='header-h2-span'>ooo</span>die</h2>
            <Nav/>
        </header>
    </>
}

export default Header;