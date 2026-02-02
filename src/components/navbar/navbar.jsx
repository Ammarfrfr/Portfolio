import './navbar.css';
import About from '../about/about.jsx';

function Navbar() {
  return (
    <div>
      <div className="navie">
        <div className="navbar">
          <div className="navName text-orange-700">
            <a href="#home">
              MR
            </a>
          </div>
          <div className="navName1 text-gray-300">
            <div>
              <a 
              href="https://github.com/Ammarfrfr" 
              target="_blank" 
              rel="noopener noreferrer"
              >
                Github
              </a>
            </div>

            <div>
              <a href="#about">
                About
              </a>
            </div>
            <div>
              <a href="#project">
                Project
              </a>
            </div>
            <div>
              <a href="#contact">
                Contact
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;