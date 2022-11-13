import Login from './Login'

const Navbar = () => {
    const navbarStyle = {
        borderStyle: 'solid',
        fontFamily: 'monospace',
        padding: 10,
        color: 'black'
    }

    const loginStyle = {
        borderStyle: 'solid',
        padding: 30,
        color: 'black',
        position: 'absolute',
        right: 0
    }

    return(
        <>
            <nav style={navbarStyle}>
                    <li>Testi 1</li>
                    <li>Testi 2</li>
                    <li>Testi 3</li>
                    <Login />
            </nav>
        </>
    )
}

export default Navbar