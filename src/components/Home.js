import React, { useContext, useState } from "react";
import styled from "styled-components";
import SingleItem from "./SingleItem";
import Filters from "./Filters";
import { shopIt } from "./Context";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

function Home() {
  const { cartState, filterProduct } = useContext(shopIt);
  const { items } = cartState;
  const { byPrice, byRating, byFreeDelivery, bySearch } = filterProduct;
  const [toggle, setToggle] = useState(false);

  const changeProducts = () => {
    let transformedProd = items;

    if (byRating) {
      transformedProd = transformedProd.filter((prod) => {
        return prod.rating >= byRating;
      });
    }

    if (byPrice) {
      transformedProd = transformedProd.filter((prod) => {
        if (byPrice === "100 - 1000") {
          return prod.price >= 100 && prod.price < 1000;
        }
        if (byPrice === "1000 - 5000") {
          return prod.price >= 1000 && prod.price < 5000;
        }
        if (byPrice === "5000 & above") {
          return prod.price >= 5000;
        }
        return transformedProd;
      });
    }

    if (byFreeDelivery) {
      transformedProd = transformedProd.filter((prod) => {
        return prod.freeDelivery;
      });
    }

    if (bySearch) {
      transformedProd = transformedProd.filter((prod) => {
        return prod.name.toLowerCase().includes(bySearch);
      });
    }

    return transformedProd;
  };

  return (
    <Hero>
      <FilterIcon onClick={() => setToggle(!toggle)}>
        <FilterAltOffIcon style={{ fontSize: "40px" }} />
      </FilterIcon>
      <Container>
        {changeProducts().map((item) => {
          return <SingleItem item={item} key={item.id} />;
        })}
      </Container>
      <Filters show={toggle} setShow={setToggle} />
    </Hero>
  );
}

export default Home;

const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  overflow-x: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 80vw;
  min-height: calc(100vh - 80px);
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const FilterIcon = styled.div`
  position: fixed;
  color: white;
  bottom: 15px;
  right: 15px;
  padding: 10px;
  z-index: 10;
  border-radius: 50%;
  -webkit-box-shadow: 0 0px 0px -10px #000000;
  -moz-box-shadow: 0 0px 0px -10px #000000;
  box-shadow: 0 10px 10px -10px #000000;
  background-color: rgb(244, 51, 151);
`;
