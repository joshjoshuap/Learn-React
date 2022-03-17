import './style.css';
import {articles1, articles2, articles3} from "./articles"

const Article = () => {
  return (
    <div>
      <div class="article-item">
        <h2 class="article-title"> Article 1 </h2>
        {articles1}
      </div>

      <div class="article-item">
        <h2 class="article-title"> Article 2 </h2>
        {articles2}
      </div>
      
      <div class="article-item">
        <h2 class="article-title"> Article 3 </h2>
        {articles3}
      </div>
    </div>
  )
}

export default Article;

