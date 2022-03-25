import { Route, Routes } from 'react-router-dom';

import User from './User';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/welcome/new-user" element={<User />} />
      </Routes>
    </section>
  );
};

export default Welcome;
