import styled from 'styled-components';

export const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 10px;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const Wrapper = styled.div`
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 780) {
    justify-content: center;
  }
`;
