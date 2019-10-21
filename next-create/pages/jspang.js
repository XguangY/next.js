import React, { useState } from 'react';
function Jspang() {
    const [color, setColor] = useState('blue')
    const changeColor = () => {
        setColor(color == 'blue'? 'red': 'blue')
    }
    return (
        <>
            <div>旭旭旭旭</div>
            <button onClick={changeColor}>点击</button>
            <style jsx>
                {
                    `
                    div {color: ${color}
                    `
                }
            </style>
        </>
    )

}

export default Jspang