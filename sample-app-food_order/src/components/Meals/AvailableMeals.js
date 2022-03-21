import { useEffect, useState } from 'react';
import style from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealsItem from './MealsItem/MealsItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);

      const res = await fetch('https://food-order-60ea8-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'); // fetching the data from firebase database

      // if fetch fails, set error
      if (!res.ok) {
        throw new Error('Something went wrong!, Fetch failed!');
      }

      const data = await res.json();
      const loadedMeals = [];

      // loop through the meals and push them to the loadedMeals array
      for (let key in data) {
        loadedMeals.push({
          id: key, // the id of the meal is the key of the object in the database 
          name: data[key].name, // meals.id.name
          image: data[key].image,
          price: data[key].price,
          description: data[key].description
        });
      }
      setMeals(loadedMeals); // set the meals to the value of loadedMeals 
      setLoading(false);
    };

    // fetch the meals from the database and catch any errors if they occur
    fetchMeal().catch(error => {
      setLoading(false);
      setError(error.message);
    });

  }, []);

  if (isLoading) {
    return <p className={style['meals-loading']}>Loading...</p>;
  }

  if (error) {
    return <p className={style['meals-error']}>{error}</p>;
  }

  // loop through the meals and display them
  const mealList = meals.map(meal =>
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />);

  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;  