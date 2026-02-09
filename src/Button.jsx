import { forwardRef } from 'react'
import '../src/button.css'

const Button = (props, ref) => {
    return (
        <button onClick={props.onClick} onMouseEnter={props.onMouseEnter} ref={ref}>{props.children}</button>
    )
}

export default forwardRef(Button)