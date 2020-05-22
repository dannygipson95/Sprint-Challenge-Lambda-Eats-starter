import React, {useState, useEffect} from "react";
import {Switch, Route, Link} from 'react-router-dom'
import Form from './components/pizza-form'
import formSchema from './validation/formSchema'
import * as yup from 'yup'
import axios from 'axios'

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    chicken: false,
    mushrooms: false,
    greenPeppers: false,
    onions: false,
    bananaPeppers: false,
    jalapenos: false,
    hotSauce: false,
    extraCheese: false
    },
  specialInstructions: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}




const App = () => {
  const [values, setValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(initialFormErrors)

  const sendOrder = order => {
    axios.post('https://reqres.in/api/users', order)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      debugger
    })
    .finally(() => {
      setValues(initialFormValues)
    })
  }

  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value
  
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...initialFormErrors,
          [name]: ''
        })
      })
      .catch(error => {
        setErrors({
          ...errors,
          [name]: error.errors[0]
        })
      })

      setValues({
        ...values,
        [name]: value
      })
  }

  const onCheckboxChange = event => {
    const {name} = event.target
    const {checked} = event.target

    setValues({
      ...values,
      toppings: {
        ...values.toppings,
        [name]: checked
      }
    })
  }

  const onSubmit = event => {

    event.preventDefault();
    const newOrder = {
      name: values.name,
      size: values.size,
      sauce: values.sauce,
      toppings: Object.keys(values.toppings)
        .filter(topping => values.toppings[topping] === true),
      specialInstructions: values.specialInstructions
    }
    sendOrder(newOrder)
    console.log(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(values)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [values])

  return (
    <Switch>
      <Route exact path='/'>
        <h1>Lambda Eats</h1>
        <Link to='/pizza'>Make an Order</Link>
      </Route>

      <Route path='/pizza'>
        <Form
         values={values} 
         onInputChange={onInputChange} 
         onCheckboxChange={onCheckboxChange} 
         sendOrder={onSubmit}
         disabled={disabled}
         errors={errors}
        />
      </Route>
    </Switch>
  );
};
export default App;
