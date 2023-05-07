import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg"

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="logo" src={logo} />
			</Link>
			<div className="mx-5">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu">

						<div>{store.favorites.map((favourite, index) => {
							return (<li className="d-flex justify-content-between p-2">
								<p key={`${favourite.uid}-${index}`}>{favourite.properties.name}</p>
								<button className="btn btn-outline-dark border border-0"
									onClick={() => actions.addFavorite(favourite)}><i className="fas fa-trash"></i></button>
							</li>)
						})}
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};
