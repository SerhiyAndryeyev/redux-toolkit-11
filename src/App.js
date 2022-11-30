import { useSelector } from "react-redux";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

    const cartIsVisible = useSelector(state => state.toggle.cartIsVisible);
    const items = useSelector( state => state.cartManagement.items);

    return (
        <Layout>
            {
               cartIsVisible && <Cart/>
            }
            <Products/>
        </Layout>
    );
}

export default App;
