import CartContent from './CartContent.tsx'



export default function Cart({onClose, answer, allCart, setAllCart}: {onClose: React.MouseEventHandler<HTMLButtonElement> | undefined, answer:any[], allCart: any[], setAllCart: React.Dispatch<React.SetStateAction<any[]>>}){
    // var orderJSON = JSON.stringify(document.getElementsByClassName("cart-content").innerText);
   console.log("in cart " + allCart)
     async function onSubmit(){
       console.log("clicked");
       const element: HTMLCollectionOf<Element> = document.getElementsByClassName("cart-content")
       const orderText = JSON.parse(localStorage.getItem('cart')|| '[]')
       let orderId = localStorage.getItem('cartId');
       console.log(orderId)
       var timeNow = new Date();
       var timeLocal = ( timeNow.getMonth() + 1 ) + '/' + timeNow.getDate() + '/' + timeNow.getFullYear() + ' ' + timeNow.getHours() + ':' + timeNow.getMinutes();
       
   
       console.log(JSON.stringify( element[0].textContent))
       const response = await fetch("http://localhost:3000/checkout", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         
         body: JSON.stringify({ "orderId": orderId,"orderTime": timeLocal, "order": orderText}) 
         // …
       });
       
     }
   
     return(
       <>
       <div className="cart-modal">
       <button className="cart-close-button" onClick={onClose} autoFocus><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 13"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path></svg></button>
         <h2>Your order:</h2>
       <CartContent allCart= {allCart} setAllCart={setAllCart} answer={answer} />
       <button className="checkout-button" onClick={onSubmit}>Checkout</button>
       </div>
       </>
   
     )
   }