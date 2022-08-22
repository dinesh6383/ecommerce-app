import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import { shopIt } from "./Context";

function Header() {
  const { cartState, setFilterDispatch } = useContext(shopIt);
  const { cart } = cartState;

  function filterInput(e) {
    setFilterDispatch({
      type: "FILTER_BY_SEARCH",
      payload: e.target.value,
    });
  }

  return (
    <Container>
      <Logo>
        <h1>SHOP-IT</h1>
      </Logo>
      <Search>
        <SearchIcon
          style={{
            position: "absolute",
            fontSize: "35px",
            color: "grey",
            top: "10px",
            right: "5px",
            cursor: "pointer",
          }}
        />
        <input
          onChange={filterInput}
          type="text"
          placeholder="Search for your items.."
        ></input>
      </Search>
      <Menu>
        <Link to={"/Cart"}>
          <Cart>
            {cart.length > 0 && <Indicator>{cart.length}</Indicator>}
            <ShoppingCartIcon
              style={{
                fontSize: "35px",
                cursor: "pointer",
              }}
            />
          </Cart>
        </Link>
        <Profile>
          <PermIdentityIcon
            style={{
              fontSize: "35px",
              cursor: "pointer",
            }}
          />
        </Profile>
      </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  -webkit-box-shadow: 0 0px 0px -10px #000000;
  -moz-box-shadow: 0 0px 0px -10px #000000;
  box-shadow: 0 8px 10px -10px #000000;
  border-radius: 4px;
  position: fixed;
  z-index: 10;
  background-color: white;
  top: 0;
  right: 0;
  left: 0;
`;

const Logo = styled.div`
  color: rgb(244, 51, 151);
`;

const Search = styled.div`
  width: 40%;
  height: 50px;
  position: relative;

  input {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    border: 1px solid grey;
    outline: none;
    letter-spacing: 0.5px;
    padding: 10px;
    font-size: 17px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`;
const Cart = styled.div`
  position: relative;
  color: black;
`;
const Profile = styled.div``;

const Indicator = styled.div`
  position: absolute;
  top: -8px;
  left: 15px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(244, 51, 151);
  border-radius: 50%;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
