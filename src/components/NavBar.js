import "./NavBarStyles.css"

function NavBar() {
    return (
       <nav>
        <div>
            <ul id="navbar">
                <li>
                     <a className="active">
                        Message App 
                    </a>
                </li>
            </ul>
        </div>
       </nav>
    );
};

export default NavBar;
