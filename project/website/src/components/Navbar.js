const Navbar = () => {
    const navbarStyle = {
        borderStyle: 'solid',
        padding: 5,
        color: 'black'
    }

    return(
        <>
            <nav>
                <a href="https://www.youtube.com/" style={navbarStyle}>Test1</a>
                <a href="https://www.youtube.com/" style={navbarStyle}>Test2</a>
                <a href="https://www.youtube.com/" style={navbarStyle}>Test3</a>
            </nav>
        </>
    )
}

export default Navbar