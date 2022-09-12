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

// 스타일을 상속받아서 사용가능하며 상속 받은 CSS를 덮어서 사용할 수 있다. (생산성 증가)
const ExtendButton = styled(BasicButton)`
  font-size: 20px;
`;

function StyledComponent() {
  return (
    <div>
      <BasicButton>기본 버튼</BasicButton>
      <PropsButton color="red">Props 버튼</PropsButton>
      <PropsButton color="purple">Props 버튼</PropsButton>
      <PropsButton>Props 버튼</PropsButton>
      {/* as 속성을 사용해서 컴포넌트의 html 태그를 변경할 수 있다. (생산성 증가) */}
      <ExtendButton as="a">Extend 버튼</ExtendButton>
    </div>
  );
}

export default StyledComponent;
