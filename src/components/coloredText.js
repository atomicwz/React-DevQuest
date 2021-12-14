import React from "react";

const Text = ({ bg, color, text }) => {
    return (
        <div style={{ backgroundColor: bg, color: color}}>
            <h3>React Quest 1</h3>
            <p>{text}</p>
        </div>
    )
}

Text.defaultProps = {
    bg: 'red',
    color: 'white',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus sem at ligula laoreet maximus. Cras dui diam, dignissim sed quam ut, porta rhoncus turpis.'
}


export default Text