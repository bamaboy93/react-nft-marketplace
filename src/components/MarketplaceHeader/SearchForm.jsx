import { FiSearch } from "react-icons/fi";
import { Button, Form, SearchBar } from "./SearchForm.styled";

const SearchForm = () => {
  return (
    <div>
      <Form>
        <SearchBar
          type="search"
          placeholder="Search your favourite NFTs"
          name="search"
        />
        <Button type="submit">
          <FiSearch size={24} />
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
