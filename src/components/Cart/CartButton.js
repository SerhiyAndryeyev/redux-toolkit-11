import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui_slice';

const CartButton = (props) => {

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(uiActions.toggle())} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
};

export default CartButton;
