const Footer = () => {
    const footerStyle = {
        backgroundColor: 'black',
        padding: 5
      }
    
      const paragraphStyle = {
        color: 'red',
        fontFamily: 'monospace'
      }
    
    return (
        <>
            <footer style={footerStyle}>
                <p style={paragraphStyle}>Greetings, this website is a study project to showcase my home village</p>
                <p style={paragraphStyle}>Author: Emil Hellberg</p>
                <p style={paragraphStyle}>© Emil Hellberg 27.7.2022 Salo</p>
                <a href="https://www.instagram.com/heben_insta/">https://www.instagram.com/heben_insta/</a>
            </footer>
        </>
    )
}

export default Footer