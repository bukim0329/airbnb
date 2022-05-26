import React from "react";
import CylindricalBox from "./CylindricalBox";

const CheckIn = ({clickedPart, setClickedPart}) => {
    const checkInStyle = {
        width: "152px",
        height: "76px",
        border: "",
    };

    return (
        <CylindricalBox
            title={"체크인"}
            placeHolder={"날짜 입력"}
            style={checkInStyle}
            partId={"CheckIn"}
            clickedPart={clickedPart}
            setClickedPart={setClickedPart}
        />
    );
};

export default CheckIn;