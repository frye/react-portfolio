import './index.scss';
import React from "react";
import ProfilePic from '../../assets/images/profile-sailing.jpg';

const Home = () => {
  return (
<section className="hero-area">
			<div className="hero-picture">
				<img src={ProfilePic} alt="Middle aged man sailing" />
			</div>
			<div className="hero-line">
			</div>
			<div className="hero-text">
				<h1>Samuli Järvinen</h1>
				<h2>Full stack developer</h2>
			</div>
		</section>
  );
};

export default Home;