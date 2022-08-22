import { Rating } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import { shopIt } from "./Context";
import CloseIcon from "@mui/icons-material/Close";

function Filters({ show, setShow }) {
  const { filterProduct, setFilterDispatch } = useContext(shopIt);
  const { byPrice, byRating, byFreeDelivery } = filterProduct;

  function priceSort(e) {
    let value = e.target.innerText;
    setFilterDispatch({
      type: "FILTER_BY_PRICE",
      payload: value,
    });
  }

  function ratingSort(e) {
    setFilterDispatch({
      type: "FILTER_BY_RATING",
      payload: e.target.value,
    });
  }

  function freeDeliver() {
    setFilterDispatch({
      type: "FILTER_FREE_DELIVERY",
      payload: !byFreeDelivery,
    });
  }

  function clearAll(e) {
    setFilterDispatch({
      type: "CLEAR_FILTERS",
    });
  }

  return (
    <Container
      style={{ transform: show ? "translateX(0)" : "translateX(110%)" }}
    >
      <Header>
        <h2>FILTERS</h2>
        <CloseEvent onClick={() => setShow(!show)}>
          <CloseIcon />
        </CloseEvent>
      </Header>
      <FilterList>
        <ByPrice>
          <p>Filter By Price.</p>
          <Choice>
            <High
              onClick={priceSort}
              style={{
                backgroundColor: byPrice === "100 - 1000" ? "pink" : "white",
              }}
            >
              <p>100 - 1000</p>
            </High>
            <Mid
              onClick={priceSort}
              style={{
                backgroundColor: byPrice === "1000 - 5000" ? "pink" : "white",
              }}
            >
              <p>1000 - 5000</p>
            </Mid>
            <Low
              onClick={priceSort}
              style={{
                backgroundColor: byPrice === "5000 & above" ? "pink" : "white",
              }}
            >
              <p>5000 & above</p>
            </Low>
          </Choice>
        </ByPrice>
        <ByRating>
          <p> Filter By Rating</p>
          <Rating
            onChange={ratingSort}
            style={{ margin: "5px" }}
            value={byRating}
          />
        </ByRating>
        <ByFastDelivery>
          <p> Filter Free Delivery Products.</p>
          <Accept>
            <input
              onChange={freeDeliver}
              type="checkbox"
              id="speed"
              checked={byFreeDelivery}
            ></input>
            <label htmlFor="speed">
              <p className="description">
                Click to see the free delivery products.
              </p>
            </label>
          </Accept>
        </ByFastDelivery>
        <ClearFilter>
          <button onClick={clearAll}>CLEAR FILTERS</button>
        </ClearFilter>
      </FilterList>
    </Container>
  );
}

export default Filters;

const CloseEvent = styled.div``;

const Container = styled.div`
  width: 40vh;
  height: 80vh;
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  border: 1px solid rgb(240, 240, 240);
  transition: all 250ms;

  @media screen and (max-width: 722px) {
    position: fixed;
    z-index: 10;
    background-color: white;
    transition: all 250ms;
    width: 100%;
    height: 100vh;
    border: none;
    margin-top: 80px;
  }
`;

const Header = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  @media screen and (max-width: 722px) {
    margin: 15px;
  }
`;

const FilterList = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ByPrice = styled.div`
  margin-top: 15px;
  p {
    font-size: 18px;
    color: grey;
  }
`;

const Choice = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
`;

const High = styled.div`
  margin: 5px;
  border: 1px solid grey;
  padding: 5px;
  border-radius: 15px;
  cursor: pointer;

  p {
    margin-top: 2px;
    font-size: 16px;
    color: black;
  }
`;

const Mid = styled.div`
  margin: 5px;
  border: 1px solid grey;
  padding: 5px;
  border-radius: 15px;
  cursor: pointer;

  p {
    margin-top: 2px;
    font-size: 16px;
    color: black;
  }
`;

const Low = styled.div`
  margin-top: 15px;
  border: 1px solid grey;
  padding: 5px;
  border-radius: 15px;
  cursor: pointer;

  p {
    margin-top: 2px;
    font-size: 16px;
    color: black;
  }

  @media screen and (max-width: 722px) {
    margin: 5px;
  }
`;

const ByRating = styled.div`
  margin-top: 15px;

  p {
    font-size: 18px;
    color: grey;
  }
`;

const ByFastDelivery = styled.div`
  margin-top: 15px;

  p {
    font-size: 18px;
    color: grey;
  }
`;

const Accept = styled.div`
  display: flex;
  padding: 10px;

  .description {
    font-size: 15px;
    color: black;
    margin-left: 5px;

    @media screen and (max-width: 722px) {
      font-size: 16px;
    }
  }
`;

const ClearFilter = styled.div`
  margin-top: 15px;

  button {
    width: 250px;
    height: 40px;
    background-color: rgb(244, 51, 151);
    border: none;
    outline: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;

    @media screen and (max-width: 722px) {
      margin-left: 55px;
    }
  }
`;
