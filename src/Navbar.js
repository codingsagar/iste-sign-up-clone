import logo from "./main_logo.png"
import "./navbar.css"
const Navbar = () => {
  const handleClick = () =>{
    let ul = document.querySelector("ul");
    if (ul.style.display === "flex") {
      ul.style.display = "none";
    } else {
      ul.style.display = "flex";
    }
  }
  return (
    <nav className="navbar">
      <div className="menubtn" onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        </div>
        <div className="logo-div">
            <img src={logo} alt="" className="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <div className="btns">
                <button className="btn">Login</button>
                <button className="btn" style={{backgroundColor:"#1571E3"}}>Sign Up</button>
                </div>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;


