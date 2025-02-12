
const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                {/* Navbar Links */}
                <div className="navbar-nav flex-row">
                    {/* Home Logo */}
                    <p className="navbar-brand fs-1" >Travel <span className="script-font text-warning">Blog</span></p>
                    <a className="nav-link me-3 ms-3 my-3" href="/about">About</a>
                    <a className="nav-link my-3" href="/popular-posts">Popular Posts</a>
                </div>
            </div>
        </nav>
        {/* Quote Section */}
        <div className="container-fluid p-4 text-center border-top border-bottom bg-body-tertiary d-none d-md-block">
            <h2 className="script-font">
            Travel is the only thing you buy that makes you richer...
            </h2>
        </div>
    </>
  )
}

export default Nav