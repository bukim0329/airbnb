import React from "react";
import styled from "styled-components";
import Modal from "../../../Modal";

const GuestModal = ({isClicked}) => {
    return <GuestModalBox isClicked={isClicked}></GuestModalBox>;
};

const GuestModalBox = styled(Modal)`
    width: 493px;
    height: 364px;
    top: 270px;
    left: 70%;
    transform: translate(-50%, -50%);
    display: ${({isClicked}) => (isClicked ? "block" : "none")};
`;

export default GuestModal;
