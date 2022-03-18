import style from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={style.summary}>
      <h2>Food For you</h2>
      <p>
        Choose your favorite meal from our broad seletion of avaiable meals. and enjoy a delicious meal.
      </p>
      <p>
        All our meals are made fresh daily and we deliver them to your door step.
      </p>
    </section>
  )
}

export default MealsSummary;