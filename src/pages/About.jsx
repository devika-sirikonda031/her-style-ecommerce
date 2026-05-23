import "../styles/About.css";

function About() {
  return (

    <div className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">

        <h1>About HER STYLE</h1>

        <p>
          Fashion that empowers every woman with elegance,
          confidence, and modern trends.
        </p>

      </div>

      {/* ABOUT CONTENT */}
      <div className="about-content">

        <div className="about-text">

          <h2>Who We Are</h2>

          <p>
            HER STYLE is a modern fashion brand created
            for women who love trendy, elegant, and
            comfortable outfits.
          </p>

          <p>
            We bring stylish collections including dresses,
            tops, skirts, and trousers with premium quality
            and affordable prices.
          </p>

          <button>
            Explore Collection
          </button>

        </div>

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
            alt="Fashion"
          />

        </div>

      </div>

    </div>
  );
}

export default About;