import { React, useContext } from "react";
import styled from "styled-components";
import CartTotal from "./CartTotal";
import SingleCartItem from "./SingleCartItem";
import { shopIt } from "./Context";

function Cart() {
  const { cartState } = useContext(shopIt);
  const { cart } = cartState;

  return (
    <Container>
      <CartItems>
        <Header>
          <p style={{ borderRight: "2px solid grey" }}>Cart</p>
          <p style={{ color: "grey" }}>{cart.length} Item</p>
        </Header>
        {cart.map((item) => {
          return <SingleCartItem item={item} key={item.id} />;
        })}
      </CartItems>
      <Total>
        <CartTotal cart={cart} />
      </Total>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const CartItems = styled.div`
  width: 60vw;

  @media screen and (max-width: 900px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -50px;
  }
`;

const Header = styled.div`
  margin: 50px 100px;
  display: flex;

  p {
    margin-left: 5px;
    font-size: 20px;
    padding-right: 5px;
  }

  @media screen and (max-width: 900px) {
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

const Total = styled.div`
  width: 40vw;

  @media screen and (max-width: 900px) {
    width: 77vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
  }
`;
