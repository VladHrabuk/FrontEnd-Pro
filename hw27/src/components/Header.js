import "./styles/Header.css";

function Header() {
  return (
    <header>
      <nav className="navigation">
        <div className="container">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Tutorials
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
