import { Link } from 'react-router-dom'
import { useFavourites } from '../../context/FavouritesContext'
import CountryCard from '../../components/CountryCard'

function Favourites() {
	const { favourites } = useFavourites()

	if (!favourites || favourites.length === 0) {
		return (
			<div className="home">
				<p className="home__placeholder">You have no saved countries yet.</p>
				<p>
					<Link to="/">Back to Home</Link>
				</p>
			</div>
		)
	}

	return (
		<div className="home">
			<h2>Your Favourites</h2>
			<div className="cards-grid">
				{favourites.map((c) => (
					<CountryCard key={c.cca3} country={c} />
				))}
			</div>
		</div>
	)
}

export default Favourites
