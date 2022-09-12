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

function StyledComponent() {
  return (
    <div>
      <BasicButton>기본 버튼</BasicButton>
    </div>
  );
}

export default StyledComponent;
