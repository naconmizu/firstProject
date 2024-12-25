import React from "react";
import HolderUser from "../../public/assets/HolderUser.jpg"; 
import backgroundUserBoardround from "../../public/assets/backgroundUserBoard.png";


const styleWallpaper = {
    backgroundImage: `url(${backgroundUserBoardround})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    
}

let imageUser = null;
// Holder ainda nao quero usar minhas imagem para o card

let descricao = null;
// ainda vou pensar 

const Card = () => {
    return (
        <div  style={styleWallpaper} className="relative bg-black w-80 my-10 rounded-xl mx-auto h-96 shadow-md overflow-hidden">
            
            <div className="relative z-10 text-center p-6">
                <img
                    src={imageUser || HolderUser}
                    className="rounded-full mx-auto w-28 h-28"
                    alt="Usuário"
                />
                <h2 className="text-white my-6 text-2xl">João Victor</h2>
                <p className="text-white text-sm">{descricao || ""}</p>
            </div>
        </div>
    );
};

export default Card;
