import React from "react";

const mStyle = {
	margin: "10px",
};

const btnStyle = {
	border: "2px solid #000",
 	background: "#fff",
	padding: "10px",
	width: "100px",
};

const iStyle = {
	padding: " 0 5px",
};

const SearchBar = () => {
	return(
		<div class="d-flex">
			<div style={mStyle}>
				<button class="btn my-3 my-sm-0" type="button" style={btnStyle}>VOBB
				<i class="bi bi-book" style={iStyle}></i>
				</button>
			</div>
		
		<div class="input-group" style={mStyle}>
				<button class="btn my-3 my-sm-0" type="button" style={btnStyle}>Search</button>
				<i class="bi bi-search" style={iStyle}></i>
				<input class="form-control mr-sm-3" style={btnStyle}
					 type="search" placeholder="Search by Title, Author or ISBN" aria-label="Search"/>	
			</div>

			<div style={mStyle}>
      			<button class="btn my-3 my-sm-0" type="button" style={btnStyle}>Hi, Sign in</button>
			</div>
		</div>
);	
}

export default SearchBar;
