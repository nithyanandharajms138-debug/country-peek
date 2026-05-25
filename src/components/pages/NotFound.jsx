import { Link } from 'react-router-dom'

function NotFound() {
	return (
		<div className="not-found">
			<h2>404 — Page not found</h2>
			<p>Sorry, we couldn't find that page.</p>
			<p>
				<Link to="/">Back to Home</Link>
			</p>
		</div>
	)
}

export default NotFound
