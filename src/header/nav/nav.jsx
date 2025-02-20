import './nav.css';

function Nav(){
            function showSideBar(){
                const menu = document.querySelector(".sidebar");
                menu.style.display = "flex";
            }
            function closeSideBar(){
                const menu = document.querySelector(".sidebar");
                menu.style.display = "none";
            }
    return<>
        <nav>
            <ul className="sidebar"> 
                <li onClick={closeSideBar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Helps</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">My Cart</a></li>
            </ul>
            <ul>
                <li className="hideOnMobile"><a href="#">Home</a></li>
                <li className="hideOnMobile"><a href="#">About</a></li>
                <li className="hideOnMobile"><a href="#">Helps</a></li>
                <li className="hideOnMobile"><a href="#">Contact</a></li>
                <li className='hideOnMobile'><a href="#">My Cart</a></li>
                <li className="menu-button"onClick={showSideBar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
        </nav>
    </>
}

export default Nav;