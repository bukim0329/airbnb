import React from "react";
import styled from "styled-components";
import PriceBox from "./PriceBox";
import GuestBox from "./GuestBox";
import DateBox from "./DateBox";
import Boundary from "../../Boundary";
import CalendarModal from "../modal/CalendarModal";
import PriceModal from "../modal/PriceModal";
import GuestModal from "../modal/GuestModal";
import {useClickedTabContext} from "../../../ClickedTabProvider";

const SearchPageSearchBar = () => {
    const {clickedTab} = useClickedTabContext();

    return (
        <SearchPageSearchBarBox>
            <DateBox />
            <Boundary condition={boundaryCondition} />
            <PriceBox />
            <Boundary condition={boundaryCondition} />
            <GuestBox />
            <CalendarModal
                isClicked={clickedTab === "DateBox" || clickedTab === "CheckIn" || clickedTab === "CheckOut"}
            />
            <PriceModal isClicked={clickedTab === "PriceBox"} />
            <GuestModal isClicked={clickedTab === "GuestBox"} />
        </SearchPageSearchBarBox>
    );
};

const SearchPageSearchBarBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "flex-start", "center")}
    position: absolute;
    top: 125px;
    left: 50%;
    height: 76px;
    width: 916px;
    border: 1px solid ${({theme}) => theme.color.gray4};
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.color.white};
    user-select: none;
    border-radius: 999px;
    z-index: 1;
`;

const boundaryCondition = {
    direction: "vertical",
    weight: "1px",
    length: "44px",
    backgroundColor: "#E0E0E0",
};

export default SearchPageSearchBar;
