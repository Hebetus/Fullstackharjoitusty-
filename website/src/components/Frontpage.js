import frontpageImage from './etusivukuva.jpg'

const Frontpage = () => {
    const frontpageStyle = {
        backgroundColor: 'grey',
        fontFamily: 'monospace',
        fontSize: 16,
        padding: 5
    }

    const imageStyle = {
        padding: 5
    }

    return (
        <div style={frontpageStyle}>
            <img src={frontpageImage} alt="kuva nettisivusta" style={imageStyle}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna 
               aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
               ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit 
               esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
               occaecat cupidatat non proident, sunt in culpa qui officia 
               deserunt mollit anim id est laborum.</p>
        </div>
    )
}

/**
 * <iframe title="Projekti 1" aria-label="Map" id="datawrapper-chart-Ic4Rg" src="https://datawrapper.dwcdn.net/Ic4Rg/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="861" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();</script>
 */

export default Frontpage