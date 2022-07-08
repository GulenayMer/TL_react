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
	<div class="d-flex border-bottom">
		<div>
			<button class="btn my-2 my-sm-0" type="button" style={{border: "2px solid #000", background: "#fff"
}}>VOBB
				<i class="bi bi-book"></i>
			</button>
		</div>
		<div>
			<form class="input-group">
				<div>
					<button class="btn my-2 my-sm-0" type="button" style={{border: "2px solid #000", background: "#fff"}}>Search
						<i class="bi bi-search"></i>
					</button>
				</div>
				<div>
					<input class="form-control mr-sm-2" style={{border: "2px solid #000", background: "#fff"}}
					 type="search" placeholder="Search by Title, Author or ISBN" aria-label="Search"/>
				</div>
			</form>
		</div>
		<div>
      		<button class="btn my-2 my-sm-0" type="button" style={{border: "2px solid #000", background: "#fff"}}>Hi, Sign in</button>
		</div>
	</div>
</div>
);
}

export default NavBar;