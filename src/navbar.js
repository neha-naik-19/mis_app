import logo from './logo.svg';
// import './App.css';
// import "./styles.css";


function navbar() {
  return (
    <div className="main-header">
        <a href="#mobile-menu-01" data-toggle="collapse" className="mobile-menu-toggle">
            Mobile Menu Toggle
        </a>

        <div className="container">
            <h1 className="logo navbar-brand">
                <a href="index.php" title="">
                    <img src={process.env.PUBLIC_URL + "images/logo.png"} />
                </a>
            </h1>
            <nav id="main-menu" role="navigation">
                <ul className="menu">
                    <li className="menu-item-has-children">
                        <a href="index.php">Home</a>                                
                    </li>
                </ul>
            </nav>
        </div>
        <nav id="mobile-menu-01" className="mobile-menu collapse">
            <ul id="mobile-primary-menu" className="menu">
                <li className="menu-item-has-children">
                    <a href="member.php">Home</a>                            
                </li>
                <li className="menu-item-has-children">
                    <a href="logout.php" >LOGOUT</a>                            
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default navbar;