import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Adopt.css";

const dogs = [
  {
    id: 1,
    name: "Charlie",
    breed: "Golden Retriever",
    age: "2 Years",
    gender: "Male",
    img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fda89d930fc320dd912a2a25487b9ca86b37fcdd6-800x600.jpg&w=1080&q=80"
  },
  {
    id: 2,
    name: "Bruno",
    breed: "Labrador",
    age: "3 Years",
    gender: "Male",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvzGFnUS4Nhp483R1DRtS1Pe-K6zalMozy7AuAPHwlt4NLkrOPTkbbfSP&s=10"
  },
  {
    id: 3,
    name: "Bella",
    breed: "Beagle",
    age: "1 Year",
    gender: "Female",
    img: "https://static.toiimg.com/photo/122245723/122245723.jpg"
  },
  {
    id: 4,
    name: "Rocky",
    breed: "Husky",
    age: "2 Years",
    gender: "Male",
    img: "https://preview.redd.it/any-other-small-husky-owners-out-there-2-years-old-26-pound-v0-wd12a0uplzc71.jpg?width=1080&crop=smart&auto=webp&s=0568c34d0662674b3de6f2324fad8a2bbe79809b"
  },
  {
    id: 5,
    name: "Max",
    breed: "German Shepherd",
    age: "4 Years",
    gender: "Male",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM88vlQquwVDn-rNrsRS6MWKCfG8cmzlj2LA4PWItDTi99qfZ-3TAsWM&s=10"
  },
  {
    id: 6,
    name: "Coco",
    breed: "Indie",
    age: "1 Year",
    gender: "Female",
    img: "https://preview.redd.it/adopted-an-indie-dog-from-the-street-heres-everything-i-v0-9nh6nj3ot9kg1.jpg?width=1045&format=pjpg&auto=webp&s=5088d74f892f3b8e1a60d33875454842a68f07ea"
  }
];
const cats = [
  {
    id: 7,
    name: "Luna",
    breed: "Persian",
    age: "1 Year",
    gender: "Female",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5IWiGELTAhkbNKGbGUBRkiC89b3rl-uPWXf4qXTrcev7E2r_iEQMc-w&s=10"
  },
  {
    id: 8,
    name: "Milo",
    breed: "British Shorthair",
    age: "2 Years",
    gender: "Male",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yAVLjxC9Vc1oVwCEtXiIaFWNOc7U-XnZlg28mYsIl69jA7d58w3gL1I&s=10"
  },
  {
    id: 9,
    name: "Simba",
    breed: "Maine Coon",
    age: "3 Years",
    gender: "Male",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3PCkPrR9doU5hRM5h8DrPmH6s9dczGzZ0JTvGIuMzdkFH3IvTFCSH9N7&s=10"
  },
  {
    id: 10,
    name: "Leo",
    breed: "Siamese",
    age: "2 Years",
    gender: "Male",
    img: "https://i.pinimg.com/736x/ba/3c/b0/ba3cb0dd4bd6d473f145905d1f36bde5.jpg"
  },
  {
    id: 11,
    name: "Nala",
    breed: "Bengal",
    age: "1 Year",
    gender: "Female",
    img: "https://i.pinimg.com/564x/c0/79/db/c079db4349f7f9b0961bbd73de021f3a.jpg"
  },
  {
    id: 12,
    name: "Daisy",
    breed: "Ragdoll",
    age: "2 Years",
    gender: "Female",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfbpB31FoNWjXWEEP_MDE9G-NkW4LLghwT0G9ng6Jhfv-h_JuO9GqYr41&s=10"
  }
];
const Adopt = () => {
  const [activeTab, setActiveTab] = useState("dogs");
  const navigate = useNavigate()
  const pets = activeTab === "dogs" ? dogs : cats;

  return (
    <div className="adopt-page">

      <div className="adopt-heading">
        <h1>Find Your Forever Friend 🐾</h1>
        <p>
          Every pet deserves love, care, and a forever home.
        </p>
      </div>

      <div className="tab-buttons">

        <button
          className={activeTab === "dogs" ? "active" : ""}
          onClick={() => setActiveTab("dogs")}
        >
          🐶 Dogs
        </button>

        <button
          className={activeTab === "cats" ? "active" : ""}
          onClick={() => setActiveTab("cats")}
        >
          🐱 Cats
        </button>

      </div>

      <div className="pet-grid">

        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>

            <div className="pet-image">
              <img src={pet.img} alt="" />     </div>

            <h2>{pet.name}</h2>

            <p><strong>Breed:</strong> {pet.breed}</p>

            <p><strong>Age:</strong> {pet.age}</p>

            <p><strong>Gender:</strong> {pet.gender}</p>

            <button
            onClick={() => navigate("/contact")} 
            >Adopt Me ❤️</button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Adopt;