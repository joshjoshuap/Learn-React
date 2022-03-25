import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import MainQuote from './components/Pages/MainQuotes';
import QuoteDetail from './components/Pages/QuoteDetail';
import NewQuote from './components/Pages/NewQuote';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<MainQuote />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
