import React from "react";
import "./Footer.css"

const Footer = () => {
	return(
		<div className="footer">
			<div>
			 <i class="bi bi-youtube"></i>
			 <i class="bi bi-facebook"></i>
			 <i class="bi bi-instagram"></i>
			 </div>
			<div>
				<button>FQA</button>
				<button>Help</button>
				<button>Library Opening Times</button>
			</div>
		</div>
	);
}

export default Footer;