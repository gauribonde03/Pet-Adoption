import "./About.css";

const families = [
  {
    id: 1,
    family: "Emma & Charlie",
    text: "Charlie filled our home with endless happiness.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LNhEmGrOPKNkuShca1HS4gCLJrgT9vCCrOipr2JhI6Gov7XaC0Bt4qc&s=10"
  },
  {
    id: 2,
    family: "Sarah & Luna",
    text: "Luna became my best friend from the very first day.",
    img: "https://images.stockcake.com/public/b/d/3/bd32fa5c-b967-41b4-9c36-fd4e93584d18_large/girl-loves-cat-stockcake.jpg"
    
  },
  {
    id: 3,
    family: "Ryan's Family & Bruno",
    text: "Bruno brought joy to our entire family.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKK-Mb_L2HQAsCAm-uwu9WWbidMOZsmBjB6DYg9UGGU7doPVxBpaXFJs&s=10"
   

  }
];

const About = () => {
  return (
    <div className="about">

      <section className="about-hero">

        <div className="about-image">
          <img className="titleImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JPCwYb3Wl6mrz77TL9yLWAItuK07VX3XIaRAv6UVC4ZSj4xa2Oerp8dm&s=10npm "
          />        </div>

        <div className="about-text">
          <h1>About Pet Haven 🐾</h1>

          <p>
            Pet Haven is a loving place where rescued dogs and cats
            find caring families. We believe every pet deserves
            a warm home, love, and a second chance.
          </p>

          <button>Learn More</button>

        </div>

      </section>

      <section className="families">

        <h2>Happy Families ❤️</h2>

        <div className="family-container">

          {families.map((item) => (
            <div className="family-card" key={item.id}>

              <div className="family-photo">
                <img className="titleImg" src={item.img}
                />
              </div>

              <h3>{item.family}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>

      <section className="why-us">

        <h2>Why Choose Pet Haven?</h2>

        <div className="why-container">

          <div className="why-card">
            🏠
            <h3>Safe Adoption</h3>
            <p>Every pet receives proper care before adoption.</p>
          </div>

          <div className="why-card">
            ❤️
            <h3>Healthy Pets</h3>
            <p>All pets are checked and vaccinated.</p>
          </div>

          <div className="why-card">
            🤝
            <h3>Lifetime Support</h3>
            <p>We're here to guide you after adoption too.</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default About;