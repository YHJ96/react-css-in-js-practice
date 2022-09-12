import React from 'react';
import './styles.css';

function PropsButton(props) {
  const styles = {
    border: `2px solid ${props.color}`,
    backgroundColor: props.color,
    color: 'white',
    padding: '16px',
    textAlign: 'center',
    fontSize: '16px',
    cursor: 'pointer',
  };
  return <button style={styles}>{props.children}</button>;
}

PropsButton.defaultProps = {
  color: 'blue',
};

function ExtendButton(props) {
  const extendStlye = {
    ...props.styles,
    fontSize: '20px',
  };
  return <button style={extendStlye}>{props.children}</button>;
}

function CommonCSS() {
  const styles = {
    border: `2px solid blue`,
    backgroundColor: 'blue',
    color: 'white',
    padding: '16px',
    textAlign: 'center',
    fontSize: '16px',
    cursor: 'pointer',
  };
  return (
    <div>
      <button className="basic-button">기본 버튼</button>
      <PropsButton color="red">Props 버튼</PropsButton>
      <PropsButton color="purple">Props 버튼</PropsButton>
      <ExtendButton styles={styles}>Extend 버튼</ExtendButton>
    </div>
  );
}

export default CommonCSS;
