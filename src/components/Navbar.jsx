import '../styles/Navbar.css'

export default function Navbar() {
    return (

        <>

        <nav className="navbar">

            <h1 className='navbar-h1'>Souhaiel<span className="dot">.</span></h1>
            <ul className='navbar-ul'>
                <li>        
                    <a href="/">Home</a>
                </li>   
                <li>        
                    <a href="/">Projects</a>
                </li>   
                <li>        
                    <a href="/">Resume</a>
                </li>   
                <li>        
                    <a href="/">Biography</a>
                </li>
                <button>Hire Me</button>   
            </ul>
        </nav>

        </>
    )
}