import { RootState } from "@/DataHandle/Redux/store";
import CustomCard from "../../Components/Fields/CustomCard/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "./filterbar";
import ContentCard from "../../Components/ScreenComponents/ContentCard/contentcard";
import './homepage.scss'
import { useNavigate } from "react-router";
import { setSelectedProperty } from "../../../DataHandle/Slice/PropertySlice";

const HomePage = () => {
  const { data: properties, pagination } = useSelector((state: RootState) => state.property);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = (property: any) => {
    dispatch(setSelectedProperty(property));
  navigate("/propertydetails");
};

  return (
    <CustomCard>
      <div className="homepage-container">
        <h2 className="page-title">Property for Sales</h2>
        <FilterBar />
        <div className="results-count">{pagination.total} Results</div>
        <div className="property-grid">
          {properties?.map((item, index) => (
            <ContentCard
              key={item.crm_id}
              data={item}
              showPrice={Math.floor(index / 3) % 2 === 0}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </CustomCard>
  );
};

export default HomePage;