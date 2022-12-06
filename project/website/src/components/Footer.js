const Footer = () => {
    const footerStyle = {
        backgroundColor: 'black',
        fontFamily: 'monospace',
        fontSize: 16
    }

    const paragraphStyle = {
        color: 'white',
        padding: 5,
        margin: 5
    }

    return (
        <div style={footerStyle}>
            <p style={paragraphStyle}>Tämä sivusto on helsingin yliopiston Fullstackopen2022 kurssin harjoitustyö</p>
            <p style={paragraphStyle}>Emil Hellberg 3.12.2022</p>
        </div>
    )
}

export default Footer