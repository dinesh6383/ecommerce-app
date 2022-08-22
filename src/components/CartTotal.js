import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { shopIt } from "./Context";

function CartTotal() {
  const { cartState } = useContext(shopIt);
  const { cart } = cartState;

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <Container>
      <Header>
        <h2>Price Details</h2>
        <TotalCost>
          <p>Total Product Price</p>
          <p>$ {total}</p>
        </TotalCost>
        <OrderTotal>
          <h3>Order Total</h3>
          <p>$ {total}</p>
        </OrderTotal>
      </Header>
      <Content>
        <p>Clicking on ‘Continue’ will not deduct any money</p>
        <button>Continue</button>
      </Content>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  width: 350px;
  height: 300px;
  border: 1px solid rgb(240, 240, 240);
  margin: 50px 20px;
`;

const Header = styled.div`
  h2 {
    margin: 5px 12px;
  }
`;
const TotalCost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 10px;
  padding: 10px 5px;
  border-bottom: 1px solid rgb(240, 240, 240);
`;
const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 10px;
  padding: 10px 5px;
`;
const Content = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 14px;
    padding: 2px;
    background-color: rgb(249, 249, 249);
    color: grey;
    border-radius: 4px;
  }

  button {
    width: 300px;
    height: 40px;
    background-color: rgb(244, 51, 151);
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 20px;
    color: white;
    font-weight: 600;
  }
`;
