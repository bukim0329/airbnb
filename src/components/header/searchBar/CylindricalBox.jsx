import React from "react";
import styled from "styled-components";
import {ReactComponent as CrossIcon} from "../../../assets/crossIcon.svg";
import {ReactComponent as SearchIcon} from "../../../assets/searchIcon.svg";
import {Link, NavLink} from "react-router-dom";
import {useClickedTabContext} from "../../../ClickedTabProvider";

const CylindricalBox = ({title, placeHolder, style, partId, hasSearchButton}) => {
    const {clickedTab, setClickedTab} = useClickedTabContext();
    const isClicked = partId === clickedTab;
    const changeClickedTab = (event) => {
        event.stopPropagation();
        if (partId === clickedTab) {
            setClickedTab(null);
        } else {
            setClickedTab(partId);
        }
    };

    return (
        <CylindricalButton isClicked={isClicked} style={style} onClick={changeClickedTab}>
            <TextBox>
                <Title>{title}</Title>
                <PlaceHolder>{placeHolder}</PlaceHolder>
            </TextBox>
            {isClicked && (
                <Icon>
                    <CrossIcon />
                </Icon>
            )}
            {hasSearchButton &&
                (isClicked ? (
                    <NavLink to="/search" style={() => ({textDecoration: "none"})}>
                        <CylindricalSearchButton>
                            <SearchIcon />
                            <span>검색</span>
                        </CylindricalSearchButton>
                    </NavLink>
                ) : (
                    <CircleSearchButton>
                        <SearchIcon />
                    </CircleSearchButton>
                ))}
        </CylindricalButton>
    );
};

const CylindricalButton = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between", "center")}
    box-sizing: border-box;
    padding: 0 20px 0 30px;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 999px;
    box-shadow: ${({theme, isClicked}) => (isClicked ? `0px 10px 20px ${theme.transparentColor.gray2}` : "")};
    &:hover {
        background-color: ${({theme, isClicked}) => (isClicked ? theme.color.white : theme.transparentColor.gray2)};
    }
`;

const TextBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("column")}
    gap: 4px;
`;

const Title = styled.div`
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 16px;
`;

const PlaceHolder = styled.div`
    font-size: 1rem;
    line-height: 24px;
    color: ${({theme}) => theme.color.gray2};
`;

const Icon = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("", "center", "center")}
    background-color: ${({theme}) => theme.color.gray6};
    width: 20px;
    height: 20px;
    border-radius: 999px;
    &:hover {
        background-color: ${({theme}) => theme.color.gray5};
    }
    svg {
        width: 15px;
        height: 15px;
    }
`;

export const CircleSearchButton = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("", "center", "center")}
    background-color: ${({theme}) => theme.color.pointColorRed};
    color: ${({theme}) => theme.color.white};
    border-radius: 999px;
    width: 40px;
    height: 40px;
    svg {
        width: 25px;
        height: 25px;
    }
`;

const CylindricalSearchButton = styled.div`
    width: 60px;
    height: 42px;
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-around", "center")}
    background-color: ${({theme}) => theme.color.pointColorRed};
    color: ${({theme}) => theme.color.white};
    padding: 0 10px;
    border-radius: 999px;
    svg {
        width: 25px;
        height: 25px;
    }
    span {
        line-height: 25px;
    }
`;
export default CylindricalBox;
