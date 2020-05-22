import React from 'react'
import {CheckboxDiv, StyledForm} from '../styledComponents/styledform'

export default function Form(props) {
    const {
        values, 
        onInputChange, 
        onCheckboxChange, 
        disabled, 
        errors,
        onSubmit
    } = props

    return(
        <StyledForm onSubmit={onSubmit}>
            <h1>Make an Order</h1>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.sauce}</div>
                <div>{errors.size}</div>
            </div>

            <div className='inputField'>
            <label>Name for Order: </label>
            <input
                type='text'
                name='name'
                onChange={onInputChange}
                value={values.name}
            />
            </div>


            <div className='category'>
                <h3>Choose a Size</h3>
            </div>
            <select
                name='size'
                value={values.size}
                onChange={onInputChange}
            >
                <option value=''>--Select a size--</option>
                <option value='personal'>Personal</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                <option value='heroic'>Heroic</option>
            </select>

            <div className='category'>
                <h3>Choose a Sauce</h3>
            </div>
            <div className='sauces'>
            <label>
                Classic Red 
                <input
                type='radio'
                name='sauce'
                value='classicRed'
                onChange={onInputChange}
                />
            </label>

            <label>
                Garlic Alfredo 
                <input
                type='radio'
                name='sauce'
                value='garlicAlfredo'
                onChange={onInputChange}
                />
            </label>

            <label>
                Creamy Pesto  
                <input
                type='radio'
                name='sauce'
                value='creamyPesto'
                onChange={onInputChange}
                />
            </label>

            <label>
                Barbeque 
                <input
                type='radio'
                name='sauce'
                value='barbeque'
                onChange={onInputChange}
                />
            </label>
            </div>


            <div className='category'>
                <h3>Toppings</h3>
            </div>

            <CheckboxDiv>
                <label>
                    Pepperoni
                <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values.toppings.pepperoni}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>
                    Sausage
                <input
                    type='checkbox'
                    name='sausage'
                    checked={values.toppings.sausage}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>
                    Chicken
                <input
                    type='checkbox'
                    name='chicken'
                    checked={values.toppings.chicken}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>
                    Mushrooms
                <input
                    type='checkbox'
                    name='mushrooms'
                    checked={values.toppings.mushrooms}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>
                    Green Peppers
                <input
                    type='checkbox'
                    name='greenPeppers'
                    checked={values.toppings.greenPeppers}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>
                    Onions
                <input
                    type='checkbox'
                    name='onions'
                    checked={values.toppings.onions}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>
                    Banana Peppers
                <input
                    type='checkbox'
                    name='bananaPeppers'
                    checked={values.toppings.bananaPeppers}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>
                    Jalapenos
                <input
                    type='checkbox'
                    name='jalapenos'
                    checked={values.toppings.jalapenos}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>
                    Hot Sauce
                <input
                    type='checkbox'
                    name='hotSauce'
                    checked={values.toppings.hotSauce}
                    onChange={onCheckboxChange}
                />
                </label>

                <label>
                    Extra Cheese
                <input
                    type='checkbox'
                    name='extraCheese'
                    checked={values.toppings.extraCheese}
                    onChange={onCheckboxChange}
                />
                </label>
            </CheckboxDiv>

            <div className='category'>
                <h3>Special Instructions</h3>
            </div>

            <input
                type='text'
                name='specialInstructions'
                value={values.specialInstructions}
                onChange={onInputChange}
            />
            <button disabled={disabled}>Submit</button>
        </StyledForm>
    )
}