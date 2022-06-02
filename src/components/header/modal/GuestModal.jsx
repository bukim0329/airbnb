import React, {useState} from "react";
import styled from "styled-components";
import Modal from "../../../Modal";
import GuestTab from "./GuestTab";
import Boundary from "../../Boundary";
import {getRandomKey} from "../../../util";

const GuestModal = ({isClicked}) => {
    const [guestCount, setGuestCount] = useState(initialGuestState);

    return (
        <GuestModalBox isClicked={isClicked}>
            {guestType
                .map((guest) => (
                    <GuestTab
                        key={guest.id}
                        typeName={guest.name}
                        detail={guest.detail}
                        type={guest.type}
                        guestCount={guestCount}
                        setGuestCount={setGuestCount}
                    />
                ))
                .reduce((acc, cur) => {
                    return acc.length
                        ? [...acc, <Boundary key={getRandomKey()} condition={boundaryCondition} />, cur]
                        : [cur];
                }, [])}
        </GuestModalBox>
    );
};

const initialGuestState = {
    adult: 0,
    children: 0,
    infant: 0,
    companionAnimal: 0,
};

const guestType = [
    {id: getRandomKey(), type: "adult", name: "성인", detail: "만 13세 이상"},
    {id: getRandomKey(), type: "children", name: "어린이", detail: "만 2~12세"},
    {id: getRandomKey(), type: "infant", name: "유아", detail: "만 2세 미만"},
    {id: getRandomKey(), type: "companionAnimal", name: "반려동물", detail: "보조동물을 동반하시나요?"},
];

const GuestModalBox = styled(Modal)`
    ${({theme}) => theme.layout.flexLayoutMixin("column")};
    display: ${({isClicked}) => (isClicked ? "flex" : "none")};
    width: 365px;
    height: 319px;
    top: 312px;
    left: 70%;
    padding: 64px;
    transform: translate(-50%, -50%);
    gap: 24px;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1);
`;

const boundaryCondition = {
    direction: "horizontal",
    weight: "1px",
    length: "100%",
    backgroundColor: "#C4C4C4",
};

export default GuestModal;
