import styled from 'styled-components';

const Container = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 2px;
  padding: 10px 0px;
`;

const Title = styled.h2`
  font-family: inherit;
  font-size: 32px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  margin: 2px 32px;
  padding: 16px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  margin: 0px 32px 0px 0px;
  padding: 16px;
`;
const Button = styled.button`
  padding: 4px 12px;
  margin: 2px;
  border: none;
  border: 1px solid #bdbdbd;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border: 1px solid #010101;
  }
`;

export { Container, Title, InputWrapper, Input, ButtonWrapper, Button };
