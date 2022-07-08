import React from "react";
import "./Card.css"
import bookcover1 from "./images/bookcover1.png";
import bookcover2 from "./images/bookcover2.png";
import bookcover3 from "./images/bookcover3.png";
import bookcover4 from "./images/bookcover4.png";
import bookcover5 from "./images/bookcover5.png";
import bookcover6 from "./images/bookcover6.png";
import background1 from "./images/background1.png"

const Card = () => {
	return(
	<div class="border-top border-bottom border-dark">
	<h2>Staff Pick</h2>
	<div class="card-deck d-flex justify-content-lg-between"  style={{backgroundImage: `url(${background1})`}}>
		<div className="card">
			<img class="card-img-top" src={bookcover1} alt="text"/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
		<div class="card">
			<img class="card-img-top" src={bookcover2} alt="text"/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
		<div class="card">
			<img class="card-img-top" src={bookcover3} alt="text"/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
		<div class="card">
			<img class="card-img-top" src={bookcover4} alt="text"/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
		<div class="card">
			<img class="card-img-top" src={bookcover5} alt="text"/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
		<div class="card">
			<img class="card-img-top" src={bookcover6} alt="text"/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
	</div>
</div>
	);
}

export default Card;