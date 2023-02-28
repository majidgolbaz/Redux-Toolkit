import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector(
    (state: { form: { name: string; cost: number } }) => {
      return {
        name: state.form.name,
        cost: state.form.cost,
      };
    }
  );

  const handleNameChange = (event: { target: { value: any } }) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event: { target: { value: any } }) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(addCar({ name, cost }));
    dispatch(changeCost(0));
    dispatch(changeName(""));
  };

  return (
    <div>
      <h4 className="">Add Car</h4>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Cost
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
              type="button"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
