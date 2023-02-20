import './App.css';
import image from "./toppic.JPG"
import imageLow from "./lowpic.JPG"
import GroceryList from './GroceryList';


function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={image} width="250px" alt="shoppingMall"/>
      </div>
      <div className='container'>
        <h1>Grocery List</h1>
      </div>
     
      <GroceryList/>
      <div className='container'>
      <img src={imageLow} width="300px" alt="bags"/>
      </div>
      
    
    </div>
  );
}

export default App;
