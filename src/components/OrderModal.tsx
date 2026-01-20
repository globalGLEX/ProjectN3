import {data} from '../modules/data.tsx';
import { useState } from 'react';


/* interface AmountContainerProps {
    amount: number;
    
  
    
    
} */
export interface OrderModalProps {
    id: number;
    onClick?: React.MouseEvent<HTMLButtonElement>;
    onClose?: React.MouseEventHandler<HTMLButtonElement>
    
    
}

function OrderModal({ onClose, id }: OrderModalProps) {
   /*  const [amount, setAmount] = useState(3); */
    
    
    
    return(
        
        <div className="order-modal" >
            <button id="closeButton" onClick={onClose} autoFocus>X</button>
            
        <div className="order-modal-image"><img src={data.restaurants[2].products[id].imageUrl} alt={data.restaurants[0].products[id].alt} /></div>
        <div className="order-modal-title">
            <h1>{data.restaurants[2].products[id].name}</h1>
            
        </div>
        <div className="order-modal-price">
            <h2>{data.restaurants[2].products[id].price} €</h2>
        </div>
        <div className="order-modal-description">
            <p>{data.restaurants[2].products[id].desc}</p>
        </div>
        <OrderModalOptions id={id} />
        <OrderModalButtons />
        
        </div>
        
    )
  }
  

  function OrderModalOptions({id}: OrderModalProps) {
    console.log(data.restaurants[2].products[id]);
    if ((data.restaurants[2].products[id].options).length === 0) {
        return <div className="order-modal-options"><p>No specifers for this product</p></div>;
        
      }
      /* for( let i = 0; i < (data.restaurants[2].products[id].options).length; i++)
        {
            return(
                <div className="order-modal-options">
                <p className="order-modal-options-text">Specifiers</p>
                <input type="checkbox" id="box1" name="option" value="0"/>
                <label htmlFor="vehicle1"> {data.restaurants[2].products[id].options[i]}</label><br />
                </div>
            );
        } */
    return (
        <div className="order-modal-options">
            <p className="order-modal-options-text">Specifiers</p>

      
        
            <input type="checkbox" id="vehicle1" name="option" value="0"/>
            <label htmlFor="vehicle1"> {data.restaurants[2].products[id].options[0]}</label><br />
            <input type="checkbox" id="vehicle2" name="option" value="Bike"/>
            <label htmlFor="vehicle2"> {data.restaurants[2].products[id].options[1]}</label><br />
            <input type="checkbox" id="vehicle3" name="option" value="Bike"/>
            <label htmlFor="vehicle3"> {data.restaurants[2].products[id].options[2]}</label><br />
            <input type="checkbox" id="vehicle4" name="option" value="Bike"/>
            <label htmlFor="vehicle4"> {data.restaurants[2].products[0].options[3]}</label><br />
            <input type="checkbox" id="vehicle4" name="option" value="Bike"/>
            <label htmlFor="vehicle4"> {data.restaurants[2].products[0].options[4]}</label><br />
  
            </div>
        
    );
  }


  
  function OrderModalButtons() {
  
    
    return (
        <div className="order-modal-buttons">
            <AmountContainer  />
            <AddToOrderButton /> 
        </div>
    );
  }

  function AmountContainer() {
   
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=1) {
      decrementCounter = () => setCounter(1);
    }
    
    return (
        <div className="amount-container">
            <button id="amount-button-decrease" onClick={decrementCounter}>-</button>
            <div className="amount-value">{counter}</div>
            <button id="amount-button-increase" onClick={incrementCounter}>+</button>
        </div>
    );
  }
  function AddToOrderButton() {
    return (
        <button id="add-to-order-button">
            <p className="add-to-order-text">Add to order</p>
            <p className="add-to-order-value">10.5 €</p>
        </button>
    );
  }
  
  export default OrderModal