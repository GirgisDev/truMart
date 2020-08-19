import React from "react";
import loadingIconSrc from "./../assets/images/loading.svg";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background-color: #FFF;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <img style={{ width: 100, display: "block" }} src={loadingIconSrc} alt=""/>
      <h3>Loading...</h3>
    </LoadingContainer>
  );
}
 
export default Loading;