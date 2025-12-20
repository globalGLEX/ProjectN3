import {data} from '../modules/data.tsx';
function OrderModal() {
    return (
        <div className="order-modal">
        <div className="order-modal-image"><img src={data.restaurants[0].products[5].imageUrl} alt={data.restaurants[0].products[0].alt} /></div>
        <div className="order-modal-title">
            <h1>{data.restaurants[0].products[0].name}</h1>
        </div>
        <div className="order-modal-price">
            <h2>{data.restaurants[0].products[0].price} eur</h2>
        </div>
        <div className="order-modal-description">
            <p>{data.restaurants[0].products[0].desc}</p>
        </div>
        <OrderModalOptions />
        <OrderModalButtons />


    </div>
    );
  }


  function OrderModalOptions() {
    return (
        <div className="order-modal-options">
            <p className="order-modal-options-text">Specifiers</p>
            <input type="checkbox" id="vehicle1" name="option" value="0"/>
            <label htmlFor="vehicle1"> {data.restaurants[0].products[0].options[0]}</label><br />
            <input type="checkbox" id="vehicle2" name="option" value="Bike"/>
            <label htmlFor="vehicle2"> {data.restaurants[0].products[0].options[1]}</label><br />
            <input type="checkbox" id="vehicle3" name="option" value="Bike"/>
            <label htmlFor="vehicle3"> {data.restaurants[0].products[0].options[2]}</label><br />
            <input type="checkbox" id="vehicle4" name="option" value="Bike"/>
            <label htmlFor="vehicle4"> {data.restaurants[0].products[0].options[3]}</label><br />
            <input type="checkbox" id="vehicle4" name="option" value="Bike"/>
            <label htmlFor="vehicle4"> {data.restaurants[0].products[0].options[4]}</label><br />
        </div>
        
    );
  }


  
  function OrderModalButtons() {
    return (
        <div className="order-modal-buttons">
            <AmountContainer amount={2} />
            <AddToOrderButton /> 
        </div>
    );
  }

  function AmountContainer(props) {
    //let amount = 1;
    return (
        <div className="amount-container">
            <button className="amount-button-decrease">-</button>
            <div className="amount-value">{props.amount}</div>
            <button className="amount-button-increase">+</button>
        </div>
    );
  }
  function AddToOrderButton() {
    return (
        <button className="add-to-order-button">
            <p className="add-to-order-text">Add to order</p>
            <p className="add-to-order-value">10.5 E</p>
        </button>
    );
  }
  export default OrderModal