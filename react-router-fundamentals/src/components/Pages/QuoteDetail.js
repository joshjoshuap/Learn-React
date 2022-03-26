import { Fragment } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';

import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Juan', text: "I'm a dummy quote" },
  { id: 'q2', author: 'Maria', text: 'Quote QUote' },
];

const QuoteDetail = () => {
  const params = useParams(); // get the params id from the url path

  const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId); // find the quote with the id from the url path params

  // check if quote id is not found return not found
  if (!quote) {
    return <p>Quote Not Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route path={`${params.quoteId}/comments`} element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
