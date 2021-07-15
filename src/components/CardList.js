import React from "react";
import Card from "./Card";

const CardList = ({ datas }) => { //obje veriyor
  const cardArray = datas.map((user, i) => {
    return (
      <Card 
        key={i}
        title={datas[i].title}
        firstName={datas[i].firstName}
        lastName={datas[i].lastName}
        email={datas[i].email}
        picture={datas[i].picture}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
