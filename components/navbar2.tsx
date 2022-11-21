export default function Navbar2()
{

    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: '#14274A'}}>
                <div className="container">
                    <a className="navbar-brand" href="#"><b>Hotel Boo - Boo</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/"><b>About</b></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="login"><b>Login</b></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
    
}