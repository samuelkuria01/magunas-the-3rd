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


            <div className='locateme'>
               <div className='locateicon'>
               <i class="fa-solid fa-location-dot fa-beat"></i>               </div>
               <button className='locatebtn'>
               <div className='locatedata'>
                  <p>Your <span>(location)</span></p>
               </div>
               </button>
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
                  <div class="dropdown">
                  <a class=" dropdown-toggle" href="/categories/7"  data-bs-toggle="dropdown" aria-expanded="false">
                  Food Cupboard
                     </a>

                        <ul class="dropdown-menu">
                           <li>
                              <a class="dropdown-item" href="/categories/1">Fresh Food
                              
                              </a>
                           </li>
                           <li><a class="dropdown-item" href="/categories/1">Dairy & eggs 
                          
                              </a></li>
                           <li><a class="dropdown-item" href="/categories/1">Sugar & Homebaking flour
                            
                           </a></li>
                           <li><a class="dropdown-item" href="/categories/1">Rice & Pasta</a></li>
                           <li><a class="dropdown-item" href="/categories/1">Snaks</a></li>
                        </ul>
                     </div>       
                  </li>
                  <li>
                    <div class="dropdown">
                    <a class=" dropdown-toggle" href="/categories/7"  data-bs-toggle="dropdown" aria-expanded="false">
                  Fresh foods
                     </a>

                        <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="/categories/6">Dairy & eggs</a></li>
                           <li><a class="dropdown-item" href="/categories/12">Fish & seafood</a></li>
                           <li><a class="dropdown-item" href="/categories/13">Meat & Poultry</a></li>
                           <li><a class="dropdown-item" href="/categories/4">Fruits & Vegetables</a></li>
                        </ul>
                     </div>      
                   </li>
                  <li>
                     <div class="dropdown">
                        <a class=" dropdown-toggle" href="/categories/7"  data-bs-toggle="dropdown" aria-expanded="false">
                        Beverages
                        </a>

                           <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="/categories/1">Coffee</a></li>
                              <li><a class="dropdown-item" href="/categories/5"> Tea</a></li>
                              <li><a class="dropdown-item" href="/categories/8">Juices</a></li>
                              <li><a class="dropdown-item" href="/categories/9">Kids drinks</a></li>
                              <li><a class="dropdown-item" href="/categories/10">Soft drinks</a></li>
                              <li><a class="dropdown-item" href="/categories/11">Powdered drinks</a></li>
                           </ul>
                        </div>      
                   </li>
                  <li>
                     <div class="dropdown">
                     <a class=" dropdown-toggle" href="/categories/2"  data-bs-toggle="dropdown" aria-expanded="false">
                        Liquor
                     </a>

                           <ul class="dropdown-menu">
                              <li><Link class="dropdown-item" to="/categories/7">Gin</Link></li>
                              <li><Link class="dropdown-item" to="/categories/1"> Whisky</Link></li>
                              <li><Link class="dropdown-item" to="/categories/1">Beer</Link></li>
                              <li><Link class="dropdown-item" to="/categories/1">Wine </Link></li>
                           </ul>
                        </div> 
                     </li>
                  <li>
                     <Link to='/categories/5'>Electricals</Link>
                  </li>
                  <li>
                  <div class="dropdown">
                  <a class=" dropdown-toggle" href="/categories/9"  data-bs-toggle="dropdown" aria-expanded="false">
                  Cleaning & Household
                     </a>

                           <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="/categories/1">Candles & Airfrsheners</a></li>
                              <li><a class="dropdown-item" href="/categories/1">Cleaning Supplies</a></li>
                              <li><a class="dropdown-item" href="/categories/1">Disposable tableware & Napkin</a></li>
                              <li><a class="dropdown-item" href="/categories/1">Laundry detergents</a></li>
                              <li><a class="dropdown-item" href="/categories/1">Tissue</a></li>
                              <li><a class="dropdown-item" href="/categories/1">Laundry detergents</a></li>

                           </ul>
                  </div>           
                   </li>
                  <li>
                  <div class="dropdown">
                        <a class=" dropdown-toggle" href="/categories/7"  data-bs-toggle="dropdown" aria-expanded="false">
                        Cleaning & Household
                        </a>

                           <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="categories/1">Candles & Airfrsheners</a></li>
                              <li><a class="dropdown-item" href="categories/1">Cleaning Supplies</a></li>
                              <li><a class="dropdown-item" href="categories/1">Disposable tableware & Napkin</a></li>
                              <li><a class="dropdown-item" href="categories/1">Laundry detergents</a></li>
                              <li><a class="dropdown-item" href="categories/1">Tissue</a></li>
                              <li><a class="dropdown-item" href="categories/1">Laundry detergents</a></li>

                           </ul>
                  </div>           
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
