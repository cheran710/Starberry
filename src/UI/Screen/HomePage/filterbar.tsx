

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <select>
        <option>All Bedrooms</option>
        <option>1 Bedroom</option>
        <option>2 Bedrooms</option>
        <option>3 Bedrooms</option>
      </select>
      <select>
        <option>Any Neighbourhood</option>
        <option>Downtown</option>
        <option>Suburbs</option>
      </select>
      <select>
        <option>Min Price</option>
        <option>€500</option>
        <option>€1000</option>
      </select>
      <select>
        <option>Max Price</option>
        <option>€1500</option>
        <option>€2000</option>
      </select>
      <select>
        <option>Sort by</option>
        <option>Price (Low to High)</option>
        <option>Price (High to Low)</option>
      </select>
    </div>
  );
};


export default FilterBar;
