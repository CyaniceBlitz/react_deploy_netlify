import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button';
import './NavBar.css';
// import $ from 'jquery';


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    window.addEventListener('resize', showButton)
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    CYANICE &nbsp;<i class="fas fa-cubes"></i>
                </Link> */}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu} id="homepage">
                        <i class="fas fa-home"></i>&nbsp;&nbsp;HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                        <i class="fas fa-folder-open"></i>&nbsp;&nbsp;PROJECTS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-links" onClick={closeMobileMenu}>
                        <i class="fas fa-dumbbell"></i>&nbsp;&nbsp;SKILLS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contactme" className="nav-links" onClick={closeMobileMenu} title="ContactMe">
                        <i class="fas fa-envelope-open-text"></i>&nbsp;&nbsp;CONTACT ME
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP
                    
                    </Button>} */}
            </div>
        </nav>
        </>
    )
}

export default NavBar























// import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// // import { Logo, MenuBars, NavMenu } from './NavBarElements'

// function NavBar() {
//     return (
//         <>













//         {/* <Nav>
//             <NavBarContainer>
//                 <NavLogo>
//                     hello
//                 </NavLogo>
//             </NavBarContainer>

//         </Nav> */}
//         {/* <nav className="navbar">
//             <div className="navbar-container">
//                 <Link to "/" className="navbar-logo">
//                     Cyanice
//                 </Link>

//             </div>

//         </nav> */}

//         </>
//     )
// }

// export default NavBar
