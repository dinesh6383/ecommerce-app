import React, { useContext } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { shopIt } from "./Context";

function SingleCartItem({ item }) {
  const { cartDispatch } = useContext(shopIt);

  function removeItem() {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  }

  function increaseCount(e) {
    item.qty += 1;
    cartDispatch({
      type: "INCREASE_COUNT",
      payload: {
        id: item.id,
        qty: item.qty,
      },
    });
  }

  function decreaseCount() {
    item.qty > 1 && (item.qty -= 1);
    cartDispatch({
      type: "DECREASE_COUNT",
      payload: {
        id: item.id,
        qty: item.qty,
      },
    });
  }

  return (
    <Container>
      <Top>
        <ImgHolder>
          <img src={item.image} alt="items"></img>
        </ImgHolder>
        <Details>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "grey" }}>
            {item.name}...
          </p>
          <p>Price : {item.price}</p>
          <p>Qty : {item.qty}</p>
        </Details>
      </Top>
      <Middle>
        <Edit>
          <p style={{ marginRight: "5px" }}>Qty : </p>
          <Minus onClick={decreaseCount}>-</Minus>
          <input type="text" value={item.qty} disabled></input>
          <Add onClick={increaseCount}>+</Add>
        </Edit>
        <Remove onClick={removeItem}>
          <DeleteIcon />
        </Remove>
      </Middle>
      {item.freeDelivery && (
        <Bottom>
          <p>Free Delivery</p>
        </Bottom>
      )}
    </Container>
  );
}

export default SingleCartItem;

const Container = styled.div`
  width: 500px;
  height: 200px;
  margin-top: 20px;
  margin-left: 100px;
  border: 1px solid rgb(240, 240, 240);

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(240, 240, 240);
`;
const ImgHolder = styled.div`
  margin: 5px;
  img {
    border-radius: 8px;
    width: 150px;
    height: 100px;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  margin-left: 10px;
`;
const Middle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;
const Edit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  input {
    width: 40px;
    height: 22px;
    border: 1px solid rgb(240, 240, 240);
    outline: none;
    padding-left: 15px;
  }
`;
const Minus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 15px;
  height: 20px;
  border: 1px solid rgb(240, 240, 240);
  padding: 10px;
  background-color: rgb(249, 249, 249);
  border-radius: 4px 0px 0px 4px;
  cursor: pointer;
`;
const Add = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 15px;
  height: 20px;
  border: 1px solid rgb(240, 240, 240);
  padding: 10px;
  background-color: rgb(249, 249, 249);
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
`;

const Remove = styled.div`
  cursor: pointer;
`;
const Bottom = styled.div`
  border-top: 1px solid rgb(240, 240, 240);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: grey;
  height: 45px;
  p {
    margin-right: 5px;
  }
`;
