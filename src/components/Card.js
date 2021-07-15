import React from "react";

const Card = ({ firstName,lastName, email,picture}) => {
  return (
    <div  className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={picture} alt="userimage" />
      <div>
        <h2>{firstName} {lastName}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
