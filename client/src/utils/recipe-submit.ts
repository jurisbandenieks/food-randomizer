import { useState } from "react";
import axios from "axios";

interface IProps {
  inventory: string;
  alergies: string;
  age: number;
  weight: number;
  isBaby: boolean;
}

function fetchRecipe(props: IProps) {
  const [recipie, setRecipie] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function submitHandler() {
    setLoading(true);
    setRecipie("");

    const promptAdult = `What recipie I can make from these ingridients - ${props.inventory}, if I have ${props.alergies} alergies and I am ${props.age} old and have weigh of ${props.weight}? Every step in new line! And give me recipie name!`;
    const promptBaby = `What recipie I can make for a baby from these ingridients - ${props.inventory}, if baby has ${props.alergies} alergies and is ${props.age} months old and have weigh of ${props.weight}? Every step in new line! And give me recipie name! Is this safe for a baby?`;

    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/recipies`,
      { prompt: props.isBaby ? promptBaby : promptAdult }
    );

    setRecipie(data.data.choices[0].text);
    setLoading(false);

    console.log("Submit", recipie);
  }

  return { submitHandler, recipie, loading };
}

export default fetchRecipe;
