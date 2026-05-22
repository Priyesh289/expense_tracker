import { useFinanceData } from '../../context/FinanceContext'
import './SearchBar.css'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const { searchInput, setSearchInput } = useFinanceData();

  return (
    <div className="searchBarContainer">
      <div className="inputWrapper">
        <FiSearch className="searchIcon" />

        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search Transactions"
          className="searchInput"
        />
      </div>
    </div>
  )
}

export default SearchBar