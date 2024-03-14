import './style.scss'
function CartItem(props) {
  const {title,style} = props;
  return (
    <div className="cart__item">
      {title && <h3 style={style}>{title}</h3>}
    </div>
  )
}
export default CartItem;