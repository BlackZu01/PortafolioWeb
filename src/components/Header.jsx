/**
 * Created by Jesus Zuluaga (Mathematician and Developer)
 * @license Apache-2.0
 */
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            
            {/* To make the code responsive  */}
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr, 3fr, 1fr]">
                <h1>
                    <a href="/" className="logo">
                        <img 
                        src="public/images/logo.svg"
                        width={40}
                        height={40}
                        alt="Jesus Zuluaga" 
                        />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button 
                    className="menu-btn"
                    onClick={null}>
                       <MenuIcon  />
                    </button> Navbar
                </div>
                <a 
                href="#contact"
                className=""
                >
                    Contact me
                </a>
            </div>
        </header>
    )
}

export default Header;
