import { useEffect, useState } from 'react'

import kartta from '../../images/kartta.png'

import { mapStyle } from './MapStyles'

const Map = () => {
    const [hasLoaded, setHasLoaded] = useState(false)
    const [mouseDown, setMouseDown] = useState(false)
    const [changeX, setChangeX] = useState(0)
    const [changeY, setChangeY] = useState(0)
    const [zoomFactor, setZoomFactor] = useState(1)

    const img = new Image()
    img.src = kartta

    window.onload = (event) => {
        setHasLoaded(!hasLoaded)
    }

    const initialRender = (event) => {
        setHasLoaded(!hasLoaded)
    }

    useEffect(() => {
        const canvas = document.getElementById("drawingmap")
        const context = canvas.getContext("2d")
            
        context.drawImage(img, changeX, changeY, window.screen.width, window.screen.height * 0.9)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasLoaded, window.location.href])

    const handleMouseDown = (event) => {
        setMouseDown(true)
    }

    const handleMouseUp = (event) => {
        setMouseDown(false)
    }

    const handleMovement = (event) => {
        const canvas = document.getElementById("drawingmap")
        const context = canvas.getContext("2d")

        if (mouseDown) {
            context.clearRect(0, 0, canvas.width, canvas.height)
            setChangeX(changeX + event.movementX)
            setChangeY(changeY + event.movementY)
            context.drawImage(img, changeX, changeY, window.screen.width * zoomFactor, window.screen.height * zoomFactor)
        }
    }

    const handleScroll = (event) => {
        const canvas = document.getElementById("drawingmap")
        const context = canvas.getContext("2d")

        if (!mouseDown && event.nativeEvent.wheelDelta >= 0) {
            setZoomFactor(zoomFactor + 0.1)
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(img, changeX, changeY, window.screen.width * zoomFactor, window.screen.height * zoomFactor)
        }
        else if (!mouseDown && event.nativeEvent.wheelDelta < 0) {
            setZoomFactor(zoomFactor - 0.1)
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(img, changeX, changeY, window.screen.width * zoomFactor, window.screen.height * zoomFactor)
        }
    }

    return (
        <div style={mapStyle()}>
            <canvas id="drawingmap" width={window.innerWidth * 0.9} height={window.innerHeight * 0.8} onLoad={initialRender} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMovement} onWheel={handleScroll}>
                Interaktiivinen kartta märynummesta
            </canvas>
        </div>
    )
}

export default Map