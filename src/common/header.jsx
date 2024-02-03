import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div
        className="logo  
       "
      >
        <h1>
          Foo<span>DX</span>
        </h1>
        <div className="">
          <ul className=" nav-style flex  gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About Us</li>
            <li>Explore Foods</li>
            <li>Reviews</li>
            <li>
              <NavLink to={"/form"}>Form</NavLink>
            </li>

            <button className="btn1 py-1"> 281-777-0000</button>
          </ul>
        </div>
        <div className="hamburger-menu">
          <img
            width={30}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
