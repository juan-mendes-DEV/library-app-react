import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(121, 9, 9, 1) 35%
  );
  padding: 60px;
  text-align: center;
  margin-top: 40px;
`
export const List = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  li {
    margin-right: 5px;
  }
`
export const Description = styled.p`
  margin-top: 30px;
  font-size: 16px;
  text-transform: capitalize;
`
