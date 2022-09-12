import React from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 기본 사용법
const BasicButton = styled.button`
  border: 2px solid green;
  background-color: green;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
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
`;

// defaultProps도 설정 가능하다.
PropsButton.defaultProps = {
  color: 'blue',
};

function StyledComponent() {
  return (
    <div>
      <BasicButton>기본 버튼</BasicButton>
      <PropsButton color="red">Props 버튼</PropsButton>
      <PropsButton color="purple">Props 버튼</PropsButton>
      <PropsButton>Props 버튼</PropsButton>
    </div>
  );
}

export default StyledComponent;
