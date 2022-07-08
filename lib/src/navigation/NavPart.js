import React from "react";

const NavPart = () => {
	
return(
	<div class="d-flex border-bottom">
		<div>
			<button class="btn btn-outline-success my-2 my-sm-0" type="button">VOBB
				<i class="bi bi-book"></i>
			</button>
		</div>
		<div>
		<form class="input-group">
				<div>
					<button class="btn btn-outline-success my-2 my-sm-0" type="button">Search
						<i class="bi bi-search"></i>
					</button>
				</div>
				<div>
					<input class="form-control mr-sm-2" type="search" placeholder="Search by Title, Author or ISBN" aria-label="Search"/>
				</div>
		</form>
		</div>
		<div>
      		<button class="btn btn-outline-success my-2 my-sm-0" type="button">Hi, Sign in</button>
		</div>
	</div>
	);
}

export default NavPart;