import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, totalItemDelete} = value

      const removeAllOne = () => {
        totalItemDelete([])
      }

      const totalBill = () => {
        let sum = 0
        cartList.forEach(each => {
          sum += each.price * each.quantity
        })
        return sum
      }

      let sai
      if (cartList.length !== 0) {
        sai = (
          <>
            <Header />
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <p className="removeallfeature" onClick={removeAllOne}>
                  Remove all
                </p>
                <CartListView />
                <div className="dinesh">
                  <div className="dinesh1">
                    <p>
                      Order Total:
                      <span className="span-total-bill">{totalBill()}</span>
                    </p>
                    <br />
                    <p>
                      <span className="span-total-bill">{cartList.length}</span>
                      items in cart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      } else {
        sai = <EmptyCartView />
      }
      return <>{sai}</>
    }}
  </CartContext.Consumer>
)
export default Cart
