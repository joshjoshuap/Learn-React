import { Route, Routes } from 'react-router-dom';

import MainQuote from './components/Pages/MainQuotes';
import QuoteDetail from './components/Pages/QuoteDetail';
import NewQuote from './components/Pages/NewQuote';

function App() {
  return (
    <Routes>
      <Route path="/quotes" element={<MainQuote />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
      <Route path="/new-quote" element={<NewQuote />} />
    </Routes>
  );
}

export default App;
