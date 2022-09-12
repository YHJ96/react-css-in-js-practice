import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CommonCSS from './CommonCSS';
import StyledComponent from './StyledComponent';

function App() {
  return (
    <React.Fragment>
      <Link to={'/'}>
        <button>CommonCSS</button>
      </Link>
      <Link to={'/styled'}>
        <button>StyledComponent</button>
      </Link>
      <Routes>
        <Route path="/" element={<CommonCSS />} />
        <Route path="/styled" element={<StyledComponent />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
