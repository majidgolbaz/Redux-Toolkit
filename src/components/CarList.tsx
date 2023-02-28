import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ form, cars: { data, searchTerm } }: any) => {
      const filteredCars = data.filter((car: any) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: form.name,
      };
    }
  );

  const handleCarDelete = (car: any) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car: any) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`flex justify-center items-center `}>
        <p className={`${bold && "bold"}`}>
          {car.name}- ${car.cost}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2 ml-2"
          type="button"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
