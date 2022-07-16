import React from "react";
import "./Navigation.css";

const NavBar = () => {

	return(
<div className="all-nav">
	<div className="navigation">
		<nav class="navbar navbar-expand-lg">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<a class="nav-link" href="books">Books</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="ebooks">Ebooks</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="audio">Audiobooks</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="magazine">Magazines</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="events">Events</a>
				</li>
			</ul>
		</nav>
	</div>
	
</div>
);
}

export default NavBar;