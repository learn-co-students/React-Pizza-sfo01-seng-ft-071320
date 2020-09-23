import React from "react"

const Pizza = (props) => {

  const {id,topping, size, vegetarian} = props.pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === true || false ? "Yes" : "No"}</td>
      <td><button onClick={(e) => props.handleEditPizza(props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}
// onClick here 
// pass in whole pizza
// whole pizza to list
// to app => handle the click event
export default Pizza
