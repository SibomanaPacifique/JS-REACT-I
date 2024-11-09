 import  { useState } from 'react' 
 import Food from './Data'
 
 const Foods = () => {

  const [foods, setFoods] = useState(Food);
  
   return (
     <div className='container'>
      <ul>
        {foods.map((food) => (<li key={food.id}>
          <p className="tex">{food.name} = {food.price} RWF</p>
          <img src={food.image}></img>
          <p className="tex">{food.decription}</p>
        </li>))}
      </ul>
     </div>
   )
 }
 
 export default Foods
 