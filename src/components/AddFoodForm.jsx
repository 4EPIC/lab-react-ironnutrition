import { useState } from "react";
import { Card, Col, Divider, Button } from "antd";

export default function AddFoodForm(props) {
  const [formState, setFormState] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form was prevented to submit");
    props.parentCb(formState);
    setFormState({});
  }

  function handleInput(event) {
    let { name, value } = event.target;
    setFormState(Object.assign({}, formState, { [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        value={formState.name || ""}
        type="text"
        onChange={handleInput}
      />
      <label htmlFor="name">Image:</label>
      <input
        name="image"
        value={formState.image}
        type="text"
        onChange={handleInput}
      />
      <label htmlFor="name">Calories:</label>
      <input
        name="calories"
        value={formState.calories || ""}
        type="number"
        onChange={handleInput}
      />
      <label htmlFor="name">Servings:</label>
      <input
        name="servings"
        value={formState.servings || ""}
        type="number"
        onChange={handleInput}
      />
      <button type="submit">Add a Food</button>
    </form>
  );
}
