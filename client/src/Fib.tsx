import axios from "axios";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

const Fib = () => {
  const [values, setValues] = useState([]);
  const [indexes, setIndexes] = useState([]);
  const [inputValue, setInputValue] = useState<{ index: number }>();

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    await axios.post("/api/values", {
      index: inputValue?.index,
    });
  };

  useEffect(() => {
    getValues().then(({ data }) => setValues(data));
    getIndexes().then(({ data }) => setIndexes(data));
  }, [getValues, getIndexes]);

  return (
    <div>
      <form>
        <label htmlFor="">Enter your index:</label>
        <input
          value={inputValue?.index}
          onChange={(event) => setInputValue({ index: +event.target.value })}
          type="number"
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>

      <h3>Indexes I have seen</h3>
      <p>{indexes.map(({ number }) => number).join(", ")}</p>

      <h3>Calculated Values:</h3>
      <p>
        {values.map((key) => (
          <div key={key}>
            For index {key} I've found the values of {indexes[key]}
          </div>
        ))}
      </p>
    </div>
  );
};

export default Fib;
/*************/
const getValues = async () => {
  return await axios.get("/api/values/current");
};

const getIndexes = async () => {
  return await axios.get("/api/values/all");
};
