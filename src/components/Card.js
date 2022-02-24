import React from "react";
import { dataCard } from "../components/cardData";
import Tilt from 'react-tilt'


const Card = () => {
  return (
    <div className="content h-screen flex justify-center items-center flex-wrap">
      {dataCard.map((item) => (
          <Tilt className="Tilt" options={{ max : 25 }}>
        <div className="card text-white bg-gray-800 shadow-lg mr-5 mt-5 rounded-xl flex justify-center flex-col text-center relative backdrop-blur-sm bg-white/30" style={{width: "280px",height:"400px"}}>
          <h2 className="absolute top-5 right-0 text-9xl font-bold text-gray-300 opacity-10 absolute">{item.cardid}</h2>
          <h3 className="text-3xl font-bold">{item.title}</h3>
          <p>{item.description}</p>
          <a href="" className="bg-rose-500 w-36 mt-3 mx-auto p-2 rounded-xl">Read More</a>
        </div>
        </Tilt>
      ))}
    </div>
  );
};

export default Card;
