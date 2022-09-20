import { useRef, useState } from 'react';
import style from './Checkout.module.css';

// check validity of input value
const isEmpty = value => value.trim() === '';
const isNot5Chars = value => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputIsValidity, setFormInputIsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    // get input values
    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostalCode = postalCodeInput.current.value;
    const enteredCity = cityInput.current.value;

    // check if input values are valid and not empty
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);

    // if entered postal code is 5 chars
    const enteredPostalCodeIsValid = !isNot5Chars(enteredPostalCode);

    // set validity of input values to true or false and set state of formInputIsValidity to true or false accordingly 
    setFormInputIsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

    // if form is not valid, stop function execution
    if (!formIsValid) {
      return;
    }

    // call onSubmitOrder function from cart component and pass entered values as an object
    props.onSumitOrder({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    }); 
  };

  return (
    <form className={style.form} onSubmit={confirmHandler}>
      <div className={`${style.control} ${formInputIsValidity.name ? '' : style.invalid}`}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameInput} />
        {!formInputIsValidity.name && <p>Entered a valid name</p>}
      </div>

      <div className={`${style.control} ${formInputIsValidity.street ? '' : style.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInput} />
        {!formInputIsValidity.street && <p>Entered a valid street</p>}
      </div>

      <div className={`${style.control} ${formInputIsValidity.postalCode ? '' : style.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInput} />
        {!formInputIsValidity.postalCode && <p>Entered a valid postal code</p>}
      </div>

      <div className={`${style.control} ${formInputIsValidity.city ? '' : style.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInput} />
        {!formInputIsValidity.city && <p>Entered a valid city</p>}
      </div>

      <div className={style.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button className={style.submit}>Confirm</button>
      </div>
    </form>
  )
};

export default Checkout;