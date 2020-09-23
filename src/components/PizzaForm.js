import React from "react"
// pizza size is small? change to medium or large or small
const PizzaForm = (props) => {

  return(
      <div className="form-row" > 

       <div className="col-5">
            <input
            name="topping"
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            value={props.pizza.topping || ''}
            onChange={(e) => props.handleFormChange(e)}
            />
            
        </div>
        <div className="col">
        <select
        	name="size"
          value={props.pizza.size}
          className="form-control"
          onChange={(e) => props.handleFormChange(e)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        </div>

        <div className="col">
          <div className="form-check">
            <input
             className="form-check-input"
              type="radio"
               value={true}
               name="vegetarian"
               checked={props.pizza.vegetarian === true || props.pizza.vegetarian === 'true' ? true : false }
               onChange={(e) => props.handleFormChange(e)}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input
             className="form-check-input" 
             type="radio" 
             value={false}
             name="vegetarian"
             checked={props.pizza.vegetarian === false || props.pizza.vegetarian === 'false' ? true : false }
             onChange={(e) => props.handleFormChange(e)}
             />

            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => props.submitPizza(e)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
