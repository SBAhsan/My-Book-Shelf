import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="h-full flex flex-col justify-between">
            <Navbar></Navbar>
            <nav className="flex flex-col">
                <a href="/">Home</a>
                <a href="/search">Search</a>
                <a href="/my_shelf">My Shelf</a>
                <a href="/favourite">Favourite</a>
            </nav>
        </div>
    );
};

export default Header;