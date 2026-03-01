import {data} from '../modules/data.tsx';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';


/* interface AmountContainerProps {
    amount: number;
    
  
    
    
} */
export interface OrderModalProps {
    id: number;
    counter?: number;
    onClick?: React.MouseEvent<HTMLButtonElement>;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    restId: number;
    
    
}
interface CheckboxProps {
    
    option: string;
    
    
}

const OptionsContext = createContext("");
function OrderModal({ onClose, id, restId }: OrderModalProps) {
    //const [isChecked, setIsChecked] = useState(false);
    const [optionsState, setOptionsState] = useState("");
    
    return(
        
        <div className="order-modal" >
            <button id="closeButton" onClick={onClose} autoFocus>X</button>
            
        <div className="order-modal-image"><img src={data.restaurants[restId].products[id].imageUrl} alt={data.restaurants[0].products[id].alt} /></div>
        <div className="order-modal-title">
            <h1>{data.restaurants[restId].products[id].name}</h1>
            
        </div>
        <div className="order-modal-price">
            <h2>{data.restaurants[restId].products[id].price} €</h2>
        </div>
        <div className="order-modal-description">
            <p>{data.restaurants[restId].products[id].desc}</p>
        </div>
        <OptionsContext value={optionsState}>
            <OrderModalOptions restId={restId} id={id}  />
            <OrderModalButtons restId={restId} id={id}/>
        </OptionsContext>
        </div>
        
    )
  }
  function Checkbox({ option}: CheckboxProps){
    const opti = useContext(OptionsContext);
    return(
            <div>
                 
                 <input type="checkbox" name="option" value={option} />
                 <label htmlFor={option}> {option}</label><br />
                 
            </div>
    )
  }
//•
  function OrderModalOptions({id, restId}: OrderModalProps) {
   
    const opti = useContext(OptionsContext);
    console.log(opti);
    //setOptionsState("dd")
    
    if ((data.restaurants[restId].products[id].options).length === 0) {
        return <div className="order-modal-options"><p>No specifers for this product</p></div>;
        
      } else {
        
        return (
                
            <div className="order-modal-options">
                <p className="order-modal-options-text">Specifiers</p>
                <form  id='my-form'>   
            {data.restaurants[restId].products[id].options.map(opt =>
            <Checkbox key={opt}  option={opt} />
            
            )}
            </form>
            </div>
            
        );
        }
  
  }
 
  function OrderModalButtons({id, restId}: OrderModalProps) {
    const [counter, setCounter] = useState(1);
  
    
    return (
        <div className="order-modal-buttons">
            <AmountContainer counter={counter} setCounter={setCounter} />
            <AddToOrderButton restId={restId} id={id} counter={counter}/> 
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
  function AddToOrderButton( {id, restId,  counter}: OrderModalProps) {
    const [optio, setOptio] = useState("no-options");
    async function onSubmit(e) {
       
       e.preventDefault();
       var form = document.querySelector('form');
       var formData = new FormData(form)
      console.log(formData.getAll('option'))
      var allOptions = JSON.stringify(formData.getAll('option'));
      console.log(allOptions)
      setOptio(allOptions)

       
       
       /*  for(var pair of formData.entries()){
        console.log(pair);
        setOptio(pair[0] + pair)
        console.log("optio is "+ pair);
        }     */
        const response = await fetch("http://localhost:3000/addtoorder", {
            
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({  
                "product": data.restaurants[restId].products[id].name,
                "productPrice": data.restaurants[restId].products[id].price,
                "options": optio,
                "amount": counter,
                "totalPrice": data.restaurants[restId].products[id].price * counter
                

             }) 
            // …
          })
        
    }
    return (
        <button id="add-to-order-button" form='my-form' type="submit" method="post" onClick={(e) => onSubmit(e)} >
            <p className="add-to-order-text">Add to order</p>
            <p className="add-to-order-value">{data.restaurants[restId].products[id].price * counter} €</p>
        </button>
    );
  }
  
  export default OrderModal