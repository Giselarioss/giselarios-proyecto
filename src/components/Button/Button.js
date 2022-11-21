const Button = (props) => {
    return <button onClick={props.handleOnClick} style={{color: props.colorText}}>{props.text}</button>
}

export default Button