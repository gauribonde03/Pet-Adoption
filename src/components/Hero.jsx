import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">
        <h1>Find Your Forever Friend 🐾</h1>

        <p>
          Every dog and cat deserves a loving home.
          Start your adoption journey today and bring happiness home.
        </p>

        <button onClick={() => navigate("/contact")}>
          Adopt Now
        </button>
      </div>

      <div className="hero-right">
        <img
          src="https://humaneloudoun.org/wp-content/uploads/2019/08/dog-with-kitten.jpg"
          alt="Dog and Cat"
        />
      </div>

    </section>
  );
};

export default Hero;