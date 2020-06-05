import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  margin: 0;
  border: none;
  outline: none;
  background-color: #264653;
  color: #add8e6;
  padding: 25px 10px 25px 10px;
`

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: inherit;
  height: auto;
  width: 100%;
  padding: 5% 0 2% 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
`;

export const InternalWrapper = styled.div`
  width: 100%;
  background-color: #2a9d8f;
  color: #002627;
  padding: 0 2% 0 2%;
  max-height: ${(props) => (props.open ? '750px' : '0')};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;
