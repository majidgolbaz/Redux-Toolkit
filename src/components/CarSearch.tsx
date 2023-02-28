import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: any) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event: { target: { value: any } }) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="flex">
      <h3>my cars</h3>
      <div>
        <label>Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        ></input>
      </div>
    </div>
  );
};

export default CarSearch;
