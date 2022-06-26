import "./styles.css";
export const Header = () => {
    return (
        <div className="header">
            <div className="header-item about"><a href="./about">about</a></div>
            <div className="header-item projects"><a href="./projects">projects</a></div>
            <div className="header-item contact"><a href="./Contact">contact</a></div>
        </div>
    );
}

export default Header;