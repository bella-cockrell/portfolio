import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => (props.bgcolor)};


`

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: inherit;
  height: auto;
  padding: 2%;
  text-align: center;
  transition: all 0.3s ease-in-out;
`;

export const InternalWrapper = styled.div`
  width: 100%;
  max-height: ${(props) => (props.open ? '500px' : '0')};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;
