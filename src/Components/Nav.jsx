
const Nav = () => {
  return (
    // <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //     <div class="container-fluid">
    //         <a class="navbar-brand" href="#">Travel <span>Blog</span></a>
    //         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div class="navbar-nav">
    //             <a class="nav-link active" aria-current="page" href="#">Home</a>
    //             <a class="nav-link" href="#">About</a>
    //             <a class="nav-link" href="#">Popular Posts</a>
    //         <form className="d-flex" role="search">
    //         <input
    //           className="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button className="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form>
    //         </div>
    //         </div>
    //     </div>
    // </nav>
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* Navbar Links */}
                <div className="navbar-nav flex-row">
                    {/* Home Logo */}
                    <a className="navbar-brand fs-1" href="#">Travel <span className="script-font">Blog</span></a>
                    <a className="nav-link me-3 ms-3 my-3" href="/about">About</a>
                    <a className="nav-link my-3" href="/popular-posts">Popular Posts</a>
                </div>
            </div>
        </nav>
        {/* Quote Section */}
        <div className="container-fluid p-4 text-center border-top border-bottom mt-4 bg-body-tertiary">
            <h2 className="script-font">
            Travel is the only thing you buy that makes you richer...
            </h2>
        </div>
    </>
  )
}

export default Nav