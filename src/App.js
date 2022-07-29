import Stripecheckout from 'react-stripe-checkout';
import axios from 'axios';
import './App.css';
import img from'./source/burger.png';
import {useState } from 'react';



function App() {
    const name="Burger";
    const price=200;
    const [quntity,setquntity]=useState(1);

 const makepayment=(token)=>{
      axios.post(process.env.REACT_APP_PAY,{
        productname:name,
        quntity:quntity,
        price:price,
        token
      })
 }

  return (
   
    <div id="container">
      <img  id="img-burger"alt="product img"   src={img}/>
     <h4>{name}</h4>
      <p id="discription">For the cheesiest burger around try this moreish reclette burger</p>
      <h3>RS:{price}</h3><br/>
      <div id="p">
     Qty<input type="number" value={quntity} onChange={(e)=>{setquntity(e.target.value)}}/>
     <Stripecheckout
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
    token={makepayment}
    name={`Buy ${name}`}
    amount={price*quntity*100}
    currency="INR">
     <button>BUY NOW</button>
    </Stripecheckout>
    </div> 
    </div>
  );
}


export default App;
