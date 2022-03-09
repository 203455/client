import '../../css/bulma.css'

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="title is-1" >AppPrueba</h1>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary" href='/Register'>
                        <strong>Sign up</strong>
                        </a>
                        <a className="button is-light" href='/Login'>
                        Log in
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
  }

  export default Navbar