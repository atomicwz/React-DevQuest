import React from "react";

const showMessage = () => alert(`a label desse botao é ${Button.defaultProps.label}`)


const Button = ({ text, label }) => {
    return (
        <button label={label} onClick={showMessage}>{text}</button>
    )
}

Button.defaultProps = {
    text: 'Clique aqui!',
    label: 'Baixar CV'
}

export default Button