import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';



function NavBar() {
   
    const { totalItems} = useCart()
    

  return (
    <div className='Homecontainer'>

        <div className='newnav'>
         <div className='newnav-wrapper'>
            <div className='mugansspanoo'>
            <h2><span className='magunasspan'>M</span>AGUNAS</h2>
            <p>Sherehekea bei ya mwananchi</p>
            </div>

            <div className='searchcont'>
            <input 
            type="text"
            placeholder='Search...'
            className='search-input'
            ></input>
            <i id='magnify' class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
            </div>

            <div className='signcart'>
               <div className='signupuu'>
               <i class="fa-regular fa-circle-user fa-shake"></i>
               {/* <i class="fa-regular fa-circle-user"></i> */}
               </div>

               <div className='loginmee'>
               <button className='signcartbtn'>
                 <Link to='/users/sign_up'>Register & Log In</Link> 
                  </button>
               </div>

               <div className='carticon'>
                        <Link to='cart'> 
                          <i class="fa-solid fa-cart-shopping">
                            <h6>{totalItems}</h6> 
                              </i>
                        </Link> 
                  </div>
            </div>
         </div>

         <div className='allcategorycont'>
            <div className='allcategory-wrapper'>
               <ul className='coverthatshitcategory'>
                  <li>
                     <Link to='/'>All</Link>
                  </li>
                  <li>
                     <Link to='/categories/1'>Food Cupboard</Link>
                  </li>
                  <li>
                     <Link to='/categories/9'>Fresh Food</Link>
                  </li>
                  <li>
                     <Link to='/categories/4'>Bevarages</Link>
                  </li>
                  <li>
                     <Link to='/categories/5'>Liquor</Link>
                  </li>
                  <li>
                     <Link to='/categories/7'>Electricals</Link>
                  </li>
                  <li>
                     <Link to='/categories/6'>Baby Products</Link>
                  </li>
                  <li>
                     <Link to='/categories/1'>Cleaning & HouseHold</Link>
                  </li>
                  <li>
                     <Link to='/categories/8'>Beauty & cosmetcics</Link>
                  </li>
               </ul>
            </div>
          </div>
          </div>



         


        
    </div>
  )
}

export default NavBar;
