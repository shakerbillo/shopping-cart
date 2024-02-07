import Header from './components/Header.jsx';
import Product from './components/Product.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

const App = () => {
	return (
		<>
			<Header />
			<Shop>
				{DUMMY_PRODUCTS.map((product) => (
					<li key={product.id}>
						<Product {...product} />
					</li>
				))}
			</Shop>
		</>
	);
};

export default App;
