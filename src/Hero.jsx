import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam
						laudantium? Vel doloribus laboriosam totam temporibus dolorum ducimus
						quaerat fugit earum, facere ipsam aperiam deserunt, praesentium mollitia
						soluta impedit asperiores!
					</p>
				</div>
                <div className="img-container">
                    <img src={heroImg} alt="woman and the browser" className="img"/>
                </div>
			</div>
		</section>
  )
}
export default Hero