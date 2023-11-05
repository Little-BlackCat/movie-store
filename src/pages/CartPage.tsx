
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart';
import useMovies from '../hooks/useMovies';

const CartPage = () => {
	const navigate = useNavigate();
	const {
		genres,
		setSelected,
		selected,
	} = useMovies();

	function deleteAllCart() {
		localStorage.removeItem("selectedList");
		setSelected([]);
	}

	// useEffect(() => {
  //   localStorage.setItem("selectedList", JSON.stringify(selected))
	// }, [selected])

	return (
		<div>
			<div className="navbar">
				<button
					className="back-btm"
					onClick={() => {
						navigate("/");
					}}
				>
					Back to Home
				</button>
				<button
					className="delete-btm"
					onClick={() => {
						deleteAllCart(), navigate("/")
					}}
				>
					Clear All Cart
				</button>
			</div>

			<h1>Shopping Cart</h1>
			<section className="movie-list-section">
				<Cart
					genres={genres}
					selected={selected}
					setSelected={setSelected}
				/>
			</section>

		</div>
	)
}

export default CartPage