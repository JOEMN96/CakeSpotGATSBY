import React from "react";
import Image from "gatsby-image";
import { IoMdClose } from "react-icons/Io";
import { useDispatch } from "react-redux";

function SingleCartItem({ Price, name, mainImg, id }) {
  let dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "REMOVEFROMCART", id });
  };

  return (
    <div className="singleCartItem">
      <div className="Wrapper">
        <Image fluid={mainImg.childImageSharp.fluid} />
      </div>
      <div className="details">
        <h4>{name}</h4>
        <p> ₹ {Price}</p>
      </div>
      <div className="close">
        <IoMdClose onClick={handleClick} />
      </div>
    </div>
  );
}

export default SingleCartItem;
