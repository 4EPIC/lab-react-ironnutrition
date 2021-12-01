import { useState } from "react";
import { Card, Col, Divider, Button } from "antd";
import foods from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

export default function FoodBox(props) {
  const [foodList, setFoodsList] = useState(foods);
  const [filteredFood, setFilteredFood] = useState([...foods]);
  const [search, setSearch] = useState("");
  const handleFilter = (query) => {
    setSearch(query);

    if (query === "") {
      setFilteredFood(foodList);
    } else {
      const newFilteredFood = foodList.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredFood(newFilteredFood);
    }
  };

  function createFood(body) {
    body._id = parseInt(Math.random() * 10000);
    setFoodsList([body, ...foodList]); // movies.concat([body])
  }

  return (
    <div>
      <AddFoodForm />
      <Search search={search} handleFilter={handleFilter} />

      {foodList.map((food) => (
        <Col key={food.id}>
          <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={food.image} alt={food.name} height={60} />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
              <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>
            <Button type="primary"> Delete </Button>
          </Card>
        </Col>
      ))}
    </div>
  );
}
