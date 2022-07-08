import React from "react";
import cover1 from "./images/subject1.png";
import cover2 from "./images/subject2.png";
import cover3 from "./images/subject3.png";
import cover4 from "./images/subject4.png";

const Browse = () => {
	return(
		<div>
			<div>
				<h2>Browse by Subject</h2>
			</div>
			<div class= "d-flex justify-content-lg-between">
				<div>
				<h2>Art</h2>
				<img src={cover1} class="rounded" alt="img" style={{width: "274px", height: "225px"}}/>
				</div>
				<div>
				<h2>IT</h2>
				<img src={cover2} class="rounded" alt="img" style={{width: "274px", height: "225px"}}/>
				</div>
				<div>
				<h2>Kids</h2>
				<img src={cover3} class="rounded" alt="img" style={{width: "274px", height: "225px"}}/>
				</div>
				<div>
				<h2>Cooking</h2>
				<img src={cover4} class="rounded" alt="img" style={{width: "274px", height: "225px"}}/>
				</div>
			</div>
		</div>
	);
}

export default Browse;