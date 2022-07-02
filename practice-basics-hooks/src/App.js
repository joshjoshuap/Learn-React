import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import style from './App.module.css';
import UseState from './UseState';
import UseRef from './UseRef';

function App() {
  return (
    <Fragment>
      <div>
      <Link to="/usestate" className={style.link}> UseState Sample </Link>
      <Link to="/useref" className={style.link}> UseRef Sample </Link>
      </div>
      <Routes>
        <Route path='/usestate' element={<UseState />} />
        <Route path='/useref' element={<UseRef />} />
      </Routes>
    </Fragment>
  );
}

export default App;
