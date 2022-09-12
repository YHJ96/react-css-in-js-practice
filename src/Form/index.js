import React from 'react';
import {
  Container,
  Title,
  InputWrapper,
  Input,
  ButtonWrapper,
  Button,
} from './styles';

function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { id, pw } = e.target;
    console.group();
    console.log('id:', id.value);
    console.log('pw:', pw.value);
    console.groupEnd();
    e.target.reset();
  };

  return (
    <Container onSubmit={handleOnSubmit}>
      <Title>회원가입</Title>
      <InputWrapper>
        <Input name="id" type="text" placeholder="ID를 입력하세요." />
        <Input name="pw" type="password" placeholder="PW를 입력하세요." />
      </InputWrapper>
      <ButtonWrapper>
        <Button type="submit">확인</Button>
        <Button>취소</Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Form;
