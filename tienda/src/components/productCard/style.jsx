import styled from "styled-components";

//!Estilos para ProductCard

const StyleProductCard = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 9px;
  float: left;
  box-shadow: 1px 3px 2px 2px #cfcdcd;
  margin-right: 27px;
  height: 340px;
  width: 400px;
  background: repeating-linear-gradient(#17202a 0px, #17202a 5px);

  .img-cars {
    object-fit: cover;
    height: 210px;
    width: 400px;
    background: rgb(230, 229, 229);
    padding: 0px;
    border-radius: 9px 9px 0px 0px;
  }

  .cars {
    font-family: Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    display: block;
    margin-left: 5px;
    position: relative;
  }

  .text-maker {
    text-align: ;
    color: #fbfcfc;
    font-size: 18px;
    font-weight: bold;
    -webkit-text-stroke: 0.5px #17202a;
  }

  .text-model {
    color: #fbfcfc;
    font-size: 20px;
    font-weight: bold;
    -webkit-text-stroke: 1.5px #17202a;
  }

  .btn {
    margin: 20px 155px;
    color: #f5b041;
    font-size: 17px;
    top: 20px;
    background: #154360;
    border-radius: 20%;
  }
  .btn:hover {
    background: #1251d1;
    color: #fdfefe;
  }
`;



export default StyleProductCard;
