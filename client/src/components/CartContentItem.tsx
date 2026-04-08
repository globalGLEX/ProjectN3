interface CartContentItemProps {
    // index: number;
     amount: string | number;
     productName: string;
     productPrice: string | number;
     productOptions: string[];
     setAllCart: React.Dispatch<React.SetStateAction<any[]>>;
     indexToRemove: number;
    
   }
   export default function CartContentItem(props: CartContentItemProps) {
    function removeItem(  indexToRemove: number, setAllCart: React.Dispatch<React.SetStateAction<any[]>>){
  
      const cart: object[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const updatedCart = cart.filter((_, index) => index !== indexToRemove);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setAllCart(updatedCart);  
      console.log("newcart" + updatedCart )
  
    }
    
    return (
      <div className="cart-content-item">
    <div className="cart-product-line"><p> x{props.amount} - <b>{props.productName}</b> - <b>{props.productPrice}€</b> </p>
    <button className="removeItemBtn" data-testid="remove-btn"  onClick={() => removeItem(props.indexToRemove, props.setAllCart)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 13">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
  </svg>
    </button></div>
    <p className="cart-option-line">  {props.productOptions?.join(', ') ?? ''}</p> 
    </div>
  )
  }