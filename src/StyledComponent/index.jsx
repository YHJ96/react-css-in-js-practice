import React from 'react';
import styled, { keyframes, css } from 'styled-components';

// 스타일 컴포넌트 기본 사용법
const BasicButton = styled.button`
  border: 2px solid green;
  background-color: green;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  // 편리하게 따로 지정할 필요 없이 컴포넌트 안에서 설정 가능하다.
  &:hover {
    background-color: white;
    border: 2px solid green;
    color: green;
  }
`;

// 스타일 컴포넌트는 컴포넌트의 프로퍼티를 받아서 사용할 수 있다.
const PropsButton = styled.button`
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  // 한번에 CSS 적용하는 방법
  ${(props) =>
    props.color === 'primary' &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}
`;

// defaultProps도 설정 가능하다.
PropsButton.defaultProps = {
  color: 'blue',
};

// 스타일을 상속받아서 사용가능하며 상속 받은 CSS를 덮어서 사용할 수 있다. (생산성 증가)
const ExtendButton = styled(BasicButton)`
  font-size: 20px;
`;

// 버튼의 속성을 정하여 사용 가능하다.
const AttributeButton = styled.button.attrs({
  type: 'submit',
})`
  background-color: red;
`;

// animation 적용방법 keyframes은 항상 animation을 사용할 컴포넌트 위에 선언해야 한다.
const rotate = keyframes` 
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const AnimatedDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: gold;
  animation: ${rotate} infinite 10s;
`;

function StyledComponent() {
  return (
    <div>
      <BasicButton>기본 버튼</BasicButton>
      <PropsButton color="red">Props 버튼</PropsButton>
      <PropsButton color="purple">Props 버튼</PropsButton>
      <PropsButton color="primary">Props 버튼</PropsButton>
      <PropsButton>Props 버튼</PropsButton>
      {/* as 속성을 사용해서 컴포넌트의 html 태그를 변경할 수 있다. (생산성 증가) */}
      <ExtendButton as="a">Extend 버튼</ExtendButton>
      <AttributeButton>Attribute 버튼</AttributeButton>
      <AnimatedDiv />
    </div>
  );
}

export default StyledComponent;
