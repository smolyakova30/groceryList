import { Component } from "react";
import check from "./icon.png"

class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }

    addItem(input){
        if (input === ""){
            alert("Please, enter an item")
        }else{
            let listArr = this.state.groceryList;
            listArr.push(input)
            this.setState({groceryList: listArr, userInput:""})
        }
    }

    deleteItem(){
        let listArr = this.state.groceryList;
        listArr = [];
        this.setState({groceryList: listArr})
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle("crossed");
    }

    onFormSubmit(e) {
        e.preventDefault();

    }


    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="What do you want to buy?"
                onChange={(e)=> {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
                <button onClick={()=> this.addItem(this.state.userInput)} className="add">Add</button>
            </div>

            

            <ul>
                {this.state.groceryList.map((item, index)=> (
                <li onClick={this.crossedWord} key={index}>
                    <img class="icon" src={check} width="20px" alt="check icon"/>
                    {item}
                </li>
                ))}
            </ul>
            <div className="container">
            <button onClick={()=>this.deleteItem()} className="delete">Delete</button>
            </div>

            </form>
            </div>
        )
    }
}


export default GroceryList;