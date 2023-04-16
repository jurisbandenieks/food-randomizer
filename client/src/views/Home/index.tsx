import { FormEvent, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import Header from "../../components/Header";
import Button from "../../components/Inputs/Button";
import SwitchInput from "../../components/Inputs/SwitchInput";
import TextInput from "../../components/Inputs/TextInput";

import recipeSubmitHandler from "../../utils/recipe-submit";

import "./styles.scss";

const Home = () => {
  const allergiesRef: null | HTMLInputElement = null;
  const inventoryRef: null | HTMLInputElement = null;
  const ageRef: null | HTMLInputElement = null;
  const weightRef: null | HTMLInputElement = null;

  const [allergies, setAllergies] = useState<string>("");
  const [inventory, setInventory] = useState<string>("");
  const [age, setAge] = useState<number>(30);
  const [weight, setWeight] = useState<number>(70);
  const [isBaby, setIsBaby] = useState<boolean>(false);

  const { submitHandler, recipie, loading } = recipeSubmitHandler({
    inventory,
    allergies,
    age,
    weight,
    isBaby
  });

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    submitHandler();
  };

  return (
    <div className="home__container">
      <Header />
      <div className="container home__content">
        <form className="home__form" onSubmit={submitForm}>
          <TextInput
            type="text"
            placeholder="What is in your fridge?"
            name="inventory"
            ref={inventoryRef}
            label="Inventory"
            onChange={(val) => setInventory(String(val))}
          />
          <SwitchInput
            label={`Baby: ${isBaby}`}
            value={isBaby}
            onChange={(val) => setIsBaby(Boolean(val))}
          />
          <TextInput
            type="number"
            placeholder="What is your age?"
            name="age"
            ref={ageRef}
            label={`Age (${isBaby ? "months" : "years"})`}
            onChange={(val) => setAge(Number(val))}
          />
          <TextInput
            type="number"
            placeholder="What is your weight?"
            name="weight"
            ref={weightRef}
            label="Weight"
            onChange={(val) => setWeight(Number(val))}
          />
          <TextInput
            type="text"
            placeholder="Do you have any allergies?"
            name="allergies"
            ref={allergiesRef}
            label="Allergies"
            onChange={(val) => setAllergies(String(val))}
          />
          <div className="center-text my-sm">
            <Button type="submit" disabled={!!loading} classes="btn--block">
              {!!recipie ? "Try Again" : "Submit"}
            </Button>
          </div>
        </form>
        {!!recipie && <div className="home__output">{recipie}</div>}
      </div>
    </div>
  );
};

export default Home;
