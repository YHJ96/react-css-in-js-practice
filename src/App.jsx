import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CommonCSS from './CommonCSS';
import StyledComponent from './StyledComponent';
import Form from './Form';

function App() {
  return (
    <React.Fragment>
      <Link to={'/'}>
        <button>CommonCSS</button>
      </Link>
      <Link to={'/styled'}>
        <button>StyledComponent</button>
      </Link>
      <Link to={'/form'}>
        <button>Form</button>
      </Link>
      <Routes>
        <Route path="/" element={<CommonCSS />} />
        <Route path="/styled" element={<StyledComponent />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
