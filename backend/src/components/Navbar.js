import './Navbar.css';

const Navbar = () => {
    return (
        <div className="NavBar">
            <img src="https://companieslogo.com/img/orig/LHA.DE_BIG.D-a8bece3a.png?t=1635288732"/>

            <ul className="navList">
                <li> <a href="/home"> Home </a></li>
                <li> <a href="/contact"> Contact </a></li>
                <li> <a href="/services"> Services </a></li>
            </ul>
        </div>
    );
}
 
export default Navbar;