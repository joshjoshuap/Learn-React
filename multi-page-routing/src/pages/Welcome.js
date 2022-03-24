import { Route, Routes } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/welcome/new-user">
          <p>Welcome User</p>
        </Route>
      </Routes>
    </section>
  );
};

export default Welcome;
