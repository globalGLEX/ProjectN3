import {data} from '../modules/data.tsx';
import { useState } from 'react';


/* interface AmountContainerProps {
    amount: number;
    
  
    
    
} */
export interface OrderModalProps {
    id: number;
    counter?: number;
    onClick?: React.MouseEvent<HTMLButtonElement>;
    onClose?: React.MouseEventHandler<HTMLButtonElement>
    
    
}
interface CheckboxProps {
    
    option: string;
    
    
}
function OrderModal({ onClose, id }: OrderModalProps) {
   

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
        <OrderModalButtons id={id}/>
        
        </div>
        
    )
  }
  function Checkbox({ option}: CheckboxProps){
    return(
            <div>
                 <input type="checkbox" name="option" value={option} />
                 <label htmlFor={option}> {option}</label><br />
            </div>
    )
  }

  function OrderModalOptions({id}: OrderModalProps) {
    
    if ((data.restaurants[2].products[id].options).length === 0) {
        return <div className="order-modal-options"><p>No specifers for this product</p></div>;
        
      } else {
        
        return (
                
            <div className="order-modal-options">
                <p className="order-modal-options-text">Specifiers</p>
            {data.restaurants[2].products[id].options.map(opt =>
            <Checkbox key={opt}  option={opt} />
            )}
            
            </div>
            
        );
        }
        /*  data.restaurants[2].products[id].options.map(function(option, i){
            
            return (
                
                <div className="order-modal-options">
                    <p className="order-modal-options-text">Specifiers</p>
                <Checkbox key={i} option={option} />
                </div>
                
            );
        })    */
        
      
      
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
       
    /* return (
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
        
    ); */
  }


  
  function OrderModalButtons({id}: OrderModalProps) {
    const [counter, setCounter] = useState(1);
  
    
    return (
        <div className="order-modal-buttons">
            <AmountContainer counter={counter} setCounter={setCounter} />
            <AddToOrderButton id={id} counter={counter}/> 
        </div>
    );
  }

  function AmountContainer({counter, setCounter}) {
    
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
  function AddToOrderButton( {id, counter}: OrderModalProps) {
    return (
        <button id="add-to-order-button">
            <p className="add-to-order-text">Add to order</p>
            <p className="add-to-order-value">{data.restaurants[2].products[id].price * counter} €</p>
        </button>
    );
  }
  
  export default OrderModal