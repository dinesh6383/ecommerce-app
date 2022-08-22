import React, { useContext } from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { shopIt } from "./Context";

function SingleItem({ item }) {
  const { cartState, cartDispatch } = useContext(shopIt);
  const { cart } = cartState;

  const addToCart = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const removeFromCart = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  };

  return (
    <Container>
      <ImgHolder>
        <img src={item.image} alt="items"></img>
      </ImgHolder>
      <ItemDetail>
        <h3>{item.name}</h3>
        <h2>$ {item.price}</h2>
        {item.freeDelivery && <p className="delivery">Free delivery</p>}
        <h3 className="rating">
          {item.rating}
          <StarIcon
            style={{
              margin: "3px 2px",
              fontSize: "20px",
            }}
          />
        </h3>
        <p>{item.reviews} Reviews</p>
        {!cart.includes(item) ? (
          <button onClick={addToCart}>ADD</button>
        ) : (
          <button style={{ backgroundColor: "red" }} onClick={removeFromCart}>
            REMOVE
          </button>
        )}
      </ItemDetail>
    </Container>
  );
}

export default SingleItem;

const Container = styled.div`
  border: 1px solid rgb(240, 240, 240);
  width: 300px;
  height: 320px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 9px;
  position: relative;
`;

const ImgHolder = styled.div`
  width: 100%;
  height: 160px;

  img {
    width: 100%;
    height: 160px;
    border-radius: 8px 8px 0px 0px;
  }
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 5px;
  * {
    margin-top: 6px;
  }

  h3 {
    color: grey;
    font-size: 23px;
  }

  .delivery {
    background-color: rgb(249, 249, 249);
    width: 100px;
    margin-left: 5px;
    padding: 3px;
    color: grey;
    border-radius: 8px;
  }

  .rating {
    color: white;
    background-color: rgb(35, 187, 117);
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 19px;
  }

  p {
    color: grey;
    font-size: 14px;
    margin-bottom: 6px;
    margin-left: 3px;
  }

  button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 80px;
    height: 35px;
    background-color: rgb(244, 51, 151);
    outline: none;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
  }
`;
