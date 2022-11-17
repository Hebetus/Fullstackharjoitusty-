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
                <li key="a">Testi 1</li>
                <li key="b">Testi 2</li>
                <li key="c">Testi 3</li>
                <Login />
                <p>Hei!, rekisteröitymistoiminnallisuus on vielä työn alla, työskentelemme taukoamatta puutteellisuuden korjaamiseksi</p>
                <p>T. Ylläpito ❤️</p>
        </>
    )
}

export default Navbar