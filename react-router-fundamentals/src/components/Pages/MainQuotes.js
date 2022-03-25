import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Juan', text: "I'm a dummy quote" },
  { id: 'q2', author: 'Maria', text: 'Quote QUote' },
];

const MainQuote = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />; // pass the quotes array to the QuoteList component
};

export default MainQuote;
