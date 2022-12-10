import React from "react";
import './style.css';

function Shoes(props) {

    return (
        <div className="container-2">
            <div className="box-3">
                <h2 className="b3-title">
                    Destaques
                </h2>
                <p className="b3-text">
                    Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. 
                </p>
            </div>
            <div className="box-4">
                <img src="src\assets\img\shoe.svg" alt="Air jordan" className="img-shoe" />
            </div>
        </div>
    )
}


export default Shoes;
