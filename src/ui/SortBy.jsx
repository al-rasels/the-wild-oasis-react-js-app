import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParam] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParam(searchParams);
  }
  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
