import CartContentItem from './CartContentItem.tsx'

export default function CartContent({ answer, allCart, setAllCart}: { answer: any[], allCart: any[], setAllCart: React.Dispatch<React.SetStateAction<any[]>>}) {

    console.log("in cartcontent " + allCart)

  return (
  <>
  <div className="cart-content">
  {allCart.length === 0 ? (
    <p>Nothing in the cart yet</p>
  ) : (
    allCart.map((item: any, index: number) => (
      <CartContentItem
        key={index}
        indexToRemove={index}
        setAllCart={setAllCart}
        amount={item.amount}
        productName={item.product}
        productPrice={item.productPrice}
        productOptions={item.options}
      />
    ))
  )}
</div>
  <div className="cart-total"> <b>&nbsp; Total: </b> 
    {allCart.reduce((acc: number, item: any) => acc + item.amount * item.productPrice, 0)} € &nbsp;
    </div>
  </>)
}
