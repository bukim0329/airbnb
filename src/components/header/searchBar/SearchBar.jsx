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
import {size} from "../../../constants";

const SearchBar = ({searchBarState}) => {
    const {clickedTab} = useClickedTabContext();

    return (
        <SearchBarBox searchBarState={searchBarState === size.MAXI}>
            <DateBox />
            <Boundary condition={boundaryCondition} />
            <PriceBox />
            <Boundary condition={boundaryCondition} />
            <GuestBox />
            <CalendarModal isClicked={clickedTab === "CheckIn" || clickedTab === "CheckOut"} />
            <PriceModal isClicked={clickedTab === "PriceBox"} />
            <GuestModal isClicked={clickedTab === "GuestBox"} />
        </SearchBarBox>
    );
};

const SearchBarBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "flex-start", "center")}
    display: ${({searchBarState}) => (searchBarState ? "flex" : "none")};
    position: absolute;
    width: 916px;
    height: 76px;
    border: 1px solid ${({theme}) => theme.color.gray4};
    top: 170px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.color.white};
    user-select: none;
    border-radius: 999px;
`;

const boundaryCondition = {
    direction: "vertical",
    weight: "1px",
    length: "44px",
    backgroundColor: "#E0E0E0",
};

export default SearchBar;
