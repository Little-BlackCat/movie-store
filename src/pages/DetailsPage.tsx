
import { useNavigate } from 'react-router-dom';
import Detail from '../components/Detail';

const DetailsPage = () => {
	const navigate = useNavigate();
	return (
		<div>
			<button
					className="back-btm"
					onClick={() => {
						navigate("/");
					}}
				>
					Back to Home
				</button>
				<Detail />
		</div>
	)
}

export default DetailsPage