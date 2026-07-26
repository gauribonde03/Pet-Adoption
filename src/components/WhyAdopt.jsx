import "./WhyAdopt.css";

const WhyAdopt = () => {
  return (
    <section className="why-adopt">

      <div className="why-image">
        <img
          src="https://img.magnific.com/free-photo/happy-boy-posing-park-with-dogs-parents_23-2148647788.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Family with pet"
        />
      </div>

      <div className="why-text">
        <h2>Why Adopt?</h2>

        <p>
          Adopting a pet means giving them a second chance at life.
          In return, you'll receive unconditional love and a lifelong companion.
        </p>

        <div className="benefits">

          <div className="benefit-card">
            ❤️
            <h3>Save a Life</h3>
            <p>Every adoption helps reduce the number of homeless pets.</p>
          </div>

          <div className="benefit-card">
            🐶
            <h3>Best Friend</h3>
            <p>Dogs and cats become loving members of your family.</p>
          </div>

          <div className="benefit-card">
            🏡
            <h3>Give a Home</h3>
            <p>Your care can change a pet's life forever.</p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default WhyAdopt;