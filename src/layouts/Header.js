import "../styles/App.css"
function Header() {
    return (
        <div className="Header">
            <div className="nav-pages">
                <a href="./" className="header-nav header-main">Main</a>
                <a href="./" className="header-nav header-delete">Delete</a>
                <a href="./" className="header-nav header-add">Add</a>
            </div>
            <a href="./" className="header-nav header-login">Login</a>
        </div >
    )
}

export default Header;
