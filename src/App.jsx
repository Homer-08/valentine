import { useRef, useState } from "react"
import "./App.css"
import Button from "./Button"

function App() {
    const [noButtonHovered, setButtonNoHovered] = useState(false)
    const [yesButtonClicked, setYesButtonClicked] = useState(false)

    const noButtonRef = useRef(null)
    const imgRef = useRef(null)
    const textRef = useRef(null)

    let imageSrc = noButtonHovered
        ? "./src/assets/cat-gun.gif"
        : "./src/assets/cat_with_flower.jpg"

    const onMouseEnter = () => {
        const noButtonRefWidth = noButtonRef.current.offsetWidth
        const noButtonRefHeight = noButtonRef.current.offsetHeight

        const x =
            Math.random() * (window.innerWidth - noButtonRefWidth - 10 - 0) + 0
        const y =
            Math.random() * (window.innerHeight - noButtonRefHeight - 10 - 0) +
            0

        noButtonRef.current.style.position = "absolute"
        noButtonRef.current.style.left = `${x}px`
        noButtonRef.current.style.top = `${y}px`

        setButtonNoHovered(true)
    }

    const onClickYesButton = () => {
        imgRef.current.src = "./src/assets/kiss.gif"

        textRef.current.innerHTML = `<p style="font-style: normal;">Love you to the Moon and back 💜</p>`

        setYesButtonClicked(true)
    }

    return (
        <>
            <div className="container">
                <main className="main">
                    <img src={imageSrc} alt="Cat with flower" ref={imgRef} />
                    <div className="text" ref={textRef}>
                        {noButtonHovered || <h1>Hello, my sugar bomb!</h1>}
                        {noButtonHovered ? (
                            <p>I don`t think so</p>
                        ) : (
                            <p>Will you be my Valentine?</p>
                        )}
                    </div>
                    {yesButtonClicked || (
                        <div className="buttons">
                            <Button
                                onMouseEnter={(event) => onMouseEnter(event)}
                                ref={noButtonRef}
                            >
                                No
                            </Button>
                            <Button onClick={onClickYesButton}>Yes</Button>
                        </div>
                    )}
                </main>
            </div>
        </>
    )
}

export default App
