import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from "../../store/cart_slice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { title, price, description } = props;
  console.log("PI props: ", props)
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => dispatch(cartActions.addItemToCart(props))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
