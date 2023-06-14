import { useState } from "react";
import axios from "axios";
import "../App.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [formValues, setFormValues] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const navigate = useNavigate();     

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers", formValues)
      .then((response) => {
        console.log(response.data);
        setFormValues({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });

      })
      .catch((error) => {
        console.error(error);
        navigate("/beers");


      });
  };

  return (
    <div>
      <Header />
      <h1>New Beer</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <br /><input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Tagline:
          <br /><input
            type="text"
            name="tagline"
            value={formValues.tagline}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <br /><textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          First Brewed:
          <br /><input
            type="text"
            name="first_brewed"
            value={formValues.first_brewed}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Brewers Tips:
          <br /><textarea
            name="brewers_tips"
            value={formValues.brewers_tips}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Attenuation Level:
          <br /><input
            type="number"
            name="attenuation_level"
            value={formValues.attenuation_level}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contributed By:
          <br /><input
            type="text"
            name="contributed_by"
            value={formValues.contributed_by}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
