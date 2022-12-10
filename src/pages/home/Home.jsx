import React, {useState, useEffect} from "react";
import Shoes from "../../components/Shoes/Shoes";
import './style.css';

function Home() {
    const [arrImages, setImagesArray] = useState([]);
    useEffect(() => {
        setImagesArray([
            "src/assets/img/shoe1.svg",
            "src/assets/img/shoe2.svg",
            "src/assets/img/shoe3.svg",
            "src/assets/img/shoe4.svg",
            "src/assets/img/shoe5.svg",
            "src/assets/img/shoe6.svg",
            "src/assets/img/shoe7.svg",
        ])
    }, [])
    
    return (
        <div className="container">
            <div className="container-1">
                <div className="box-1">
                    <h3 className="b1-bonus">Ganhe R$ 10,00 de desconto no frete</h3>
                    <h2 className="b1-title">JordanShoes</h2>
                </div>
                <div className="box-2">
                    <h1 className="b2-title">A melhor loja de Jordan</h1>
                    <p className="b2-text">
                        O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.
                    </p>
                </div>
            </div>
            <div className="container-2">
                <div className="box-3">
                    <h2 className="b3-title">
                        Destaques
                    </h2>
                    <p className="b3-text">
                        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. 
                    </p>
                </div>
            </div>
            {
                arrImages.map((srcImage, idx) => <Shoes key={idx} image={srcImage} />)
            }
        </div>

    )
}

export default Home;
