import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }: any) => {
    const filteredCars = data.filter((car: any) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return filteredCars.reduce(
      (acc: any, car: { cost: any }) => acc + car.cost,
      0
    );
  });
  return <div className="">Total Cost: ${totalCost}</div>;
};

export default CarValue;
