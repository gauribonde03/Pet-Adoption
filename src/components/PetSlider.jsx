import { useNavigate } from "react-router-dom";
import "./PetSlider.css";

const pets = [
  {
    name: "Luca",
    type: "Golden Retriever",
    image: "https://media.adoptapet.com/image/upload/d_Fallback-Photo_Dog-v3.png/c_auto,g_auto,w_358,ar_142:135,dpr_2/f_auto,q_auto/1318714538"
  },
  {
    name: "Bella",
    type: "Labrador",
    image: "https://ik.imagekit.io/rpimagescdn/dogOwners/clover-labrador-for-adoption-111522-6a50c5adc144f8.237335140.jpg?tr=w-700,q-80"
  },
  {
    name: "Luna",
    type: "Persian Cat",
    image: "https://www.expatriates.com/img/63622990.1.jpg"
  },
  {
    name: "Mili & Milo",
    type: "British Shorthair",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL01trGS8Kbjw1DMnAjPEGRJJ5oNdKtd8TmSNykI317VJhJ3ancc5FAY4&s=10"
  }
];

const PetSlider = () => {

  const navigate = useNavigate()

  return (
    <section className="pets">

      <h2>Meet Our Friends 🐾</h2>

      <div className="pet-container" onClick={() => navigate("/contact")}>

        {pets.map((pet, index) => (
          <div className="pet-card" key={index}>

            <img src={pet.image} alt={pet.name} />

            <h3>{pet.name}</h3>

            <p>{pet.type}</p>

            <button onClick={() => navigate("/contact")}>Adopt Me</button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default PetSlider;