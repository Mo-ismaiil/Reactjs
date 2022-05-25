import {Link} from "react-router-dom";

let Header = ()=>{
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/List"}> List of Products </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/Add"}> Add Product</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;