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
                <li>
                     <a className="active">
                        <Link to="/Message">Message App </Link>
                    </a>
                </li>
            </ul>
        </div>
       </nav>
    );
};

export default NavBar;
