import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

function Cart() {
    // const [showReciept, setShowReciept] = useState(false)
    // const [customerNumber, setcustomerNumber] = useState('')
    // const [customerLocation, setCustomerLocation] = useState('')
    // const [orderdetails, setOrderDetails] = useState([])


    // const handlePlaceOrder = () =>{
    //     //prompt customer to enter their name
    //     const customerNumber = prompt('Please enter your Number!')
    //     const customerLocation = prompt('Please your Location')
  
  
    //     // //Set customerNumber, location and orderdetails
    //     // setcustomerNumber(customerNumber)
    //     // setCustomerLocation(customerLocation)
    //     // setOrderDetails(items); // Convert items array to a string
    //   // Clear the cart after order confirmation
    //     items.forEach((item) => removeItem(item.id))
    //     //show receipt modal
    //     setShowReciept(true)
  
    // }

//      //function to close the reciept modal
//   const handleCloseReciept = () =>{
//     setShowReciept(false)
// }


    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();

      if (isEmpty) return <p>
        <h3 className='emptycart'>
        Your Cart is empty
        </h3>
        <Link>
        <button className='cartbtn4'>go back</button>
        </Link>
        </p>

        //Calculate the total quantit of goods in the cart
        const totalPrice = items.reduce((total, item) =>total + item.price * item.quantity,0)




  return (
    <div>
    <div className='mamboyacart'>
      <div className='yoshipment'>
      <h5>Shopping cart </h5>
      <div>
      ({totalUniqueItems}) items
      </div>
      </div>
    {items.map((item) =>(
       <div className='cartwrappermambo' key={item.id}>
        <div className='cartnip'>
        <div>
         <img className='cartenimage' src={item.image} alt='mambosafi'></img>
       </div>
       <div>
        {item.title}
        <div>
          <h5>Price</h5>
         <p>Ksh. {item.price}</p>
         </div>
        </div>
       <div className='quantoo'>
         <p>Quantity</p> 
         <button id='cartbtn3' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
            <i id='addbtn' className="fa-solid fa-minus"></i>
          </button>
          {item.quantity}
          <button id='cartbtn3' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
            <i id='addbtn' className="fa-solid fa-plus"></i>
          </button>
       </div>
          </div>
       
       
       <div className='cartkubonga'>
        
         <div>
         <h5>Total</h5>
         <p> Ksh. {(item.quantity * item.price).toFixed(2)}</p>
         </div>
      <div>
       <button  id="dustbin" onClick={() => removeItem(item.id)}>
                  <i  className="fa-sharp fa-solid fa-trash"></i>
        </button>
      </div>
         
       </div>
      

     </div>

    ))}
     <span class="titlle">Total Price:<span className='price2'>Ksh{totalPrice.toFixed(2)}</span> </span>
{/* <button onClick={handlePlaceOrder} type="button" class="action">Place Order</button> */}

    </div>
    </div>
  )
}

export default Cart
