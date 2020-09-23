import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state ={
    pizzas: [],
    pizza:{ 
    topping: '',
    size: '',
    vegetarian: null
   }
    
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pizzas`)
    .then(res => res.json())
    .then(pizzas => {
      this.setState({
        pizzas
      })
    })
  }

  handleEditPizza = (pizza) =>{
    this.setState({
      pizza: pizza
       
    })
  }

  submitPizza = (e) =>{
    e.preventDefault()
    this.handleUpdate()
    this.updatePizzasList()
    this.resetForm()
  }

  handleFormChange = (e) => {
    this.setState({
      pizza:{
        ...this.state.pizza,
        [e.target.name]: e.target.value
      }
    })
  }

  handleUpdate = () =>{
   let pizza = {
    pizza:{ 
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
     }
   }
    fetch(`http://localhost:3000/pizzas/${this.state.pizza.id}`,{
      method: "PATCH",
      header: {
        "Content-Type" : "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(pizza)
    })
  }

  updatePizzasList = () => {
    let newPizzas = [...this.state.pizzas].map(p => {
      return (p.id === this.state.pizza.id ? this.state.pizza : p)
    })
    this.setState({pizzas: newPizzas})
  }

  resetForm = () => {
    this.setState({pizza: {id: null, topping: "", size: "", vegetarian: null}})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        handleFormChange={this.handleFormChange}
        handleEditPizza={this.handleEditPizza}
        submitPizza={this.submitPizza}
        pizza={this.state.pizza}
        />
        <PizzaList 
        pizzas={this.state.pizzas}
        handleEditPizza={this.handleEditPizza}
        />
      </Fragment>
    );
  }
}

export default App;
