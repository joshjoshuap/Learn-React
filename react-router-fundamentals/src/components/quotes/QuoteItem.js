import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      {/* go to link with corresponding params id */}
      <Link to={`/quotes/${props.id}`} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
