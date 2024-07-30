import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ModalSearch = styled.input`
    /* display: none; */
  /* border-radius: 5px; */
  &::placeholder {
    padding-left: 18px;
    color: #6e8098;
  }
  &[placeholder] {
    color: black;
    padding-left: 28px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Modal = () => {
  return (
    <dialog>
      <LocBtn
          type="text"
          onChange={handleLocationChange}
          value={locationInput}
          placeholder="filter by location"
        ></LocBtn>
      
        <button>Close</button>
      
    </dialog>
  );
};

export default Modal;
