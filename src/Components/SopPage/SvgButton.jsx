import React from 'react';
import Image from "./Vector.svg";

const ButtonImage = ({ onClick }) => {
    return (
        <button onClick={onClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', marginLeft: '20px', }}>
            <img src={Image} alt="Botón" />
        </button>
    );
};

export default ButtonImage;
