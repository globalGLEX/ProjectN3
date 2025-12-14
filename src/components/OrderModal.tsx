function OrderModal() {
    return (
        <div className="order-modal">
        <div className="order-modal-image"></div>
        <div className="order-modal-title">
            <h1>Big Burger</h1>
        </div>
        <div className="order-modal-price">
            <h2>10.5 eur</h2>
        </div>
        <div className="order-modal-description">
            <p>It's two 100% beef patties, melted cheese, onions, pickles, lettuce and special sauce that make the Big Burger an iconic classNameic.</p>
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
            <label htmlFor="vehicle1"> No cheese</label><br />
            <input type="checkbox" id="vehicle2" name="option" value="Bike"/>
            <label htmlFor="vehicle2"> No lettuce</label><br />
            <input type="checkbox" id="vehicle3" name="option" value="Bike"/>
            <label htmlFor="vehicle3"> No onion</label><br />
            <input type="checkbox" id="vehicle4" name="option" value="Bike"/>
            <label htmlFor="vehicle4"> No BBQ sauce</label><br />
        </div>
    );
  }


  
  function OrderModalButtons() {
    return (
        <div className="order-modal-buttons">
            <AmountContainer />
            <AddToOrderButton /> 
        </div>
    );
  }

  function AmountContainer() {
    return (
        <div className="amount-container">
            <button className="amount-button-decrease">-</button>
            <div className="amount-value">0</div>
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