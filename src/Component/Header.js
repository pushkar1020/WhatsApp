import logo from '../logo.svg';
import './App.css';

function Header() {
    let appName = "Whatsapp";
    return (
        <header className="App-header">
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="app-name">{appName}</h1>
        </div>
        <div className="code-link">
            <a href="https://github.com/pushkar1020/Test-Magento" target="_blank" rel="noreferrer">Code</a>
        </div>
        </header>
);
}

export default Header;
