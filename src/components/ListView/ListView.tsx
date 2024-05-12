import React, { useState, useEffect } from "react";
import UniversityList from "../../models/UniversityList";
import ListingController from "../../controller/ListingController";
import SearchBar from "../common/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import SortingDropdown from "../common/FilterSort/FilterSort";
import "../../App.css";
import '../../assets/css/style.css';

const ListingPage: React.FC = () => {
  const [universities, setUniversities] = useState<UniversityList[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUniversities, setFilteredUniversities] = useState<
  UniversityList[]
  >([]);
  const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ListingController.fetchUniversities();
        console.log(data);
        setUniversities(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = universities.filter((university) =>
      university.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUniversities(filtered);
  }, [searchTerm, universities]);

  const handleDelete = (name: string) => {
      const updatedUniversities = universities.filter(
        (university) => university.name !== name
      );
      setUniversities(updatedUniversities);
      localStorage.setItem("universities", JSON.stringify(updatedUniversities));
  };

  const handleSort = (value: string) => {
    const sorted =
      value === ""
        ? universities
        : [...filteredUniversities].sort((a, b) => {
            return value === "asc"
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
          });

    setSortOrder(value);
    setFilteredUniversities(sorted);
  };

  return (
    <>
      <div
        className="container-view"
      >
        <h1 style={{ width: "100%" }}>Please Find the list of Universities</h1>
        <div
          className="inrow-filter"
          style={
            {
              display: "grid",
              gridTemplateColumns: "1fr 1fr", 
              gap: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",      
            } as any
          }
        > 
          <div style={{ width: "50%" }}>
            {" "}
            <h3 style = {{color: "green"}}>Search Here </h3>            
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div style={{ width: "50%" }}>
          <h3 style = {{color: "green"}}>Filter </h3>
            <SortingDropdown onChange={handleSort} />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          padding: "20px",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        {filteredUniversities.map((university) => (
          <div
            key={university.name}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "aqua"
            }}
          > 
          <div style={
            {
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
              backgroundColor: "#e9dddd"
            } as any }>
            <h2 style={{ marginTop: 0 }} className="card-title">
               {university.name}
            </h2>
            <h2></h2> 
            
              <Link
                to={`/university/${encodeURIComponent(university.name)}`}
                style={{
                  backgroundColor: "#6a6a71",
                  color: "#fff",
                  border: "none",
                  padding: "10px 100px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  textDecoration: "none",
                  // marginLeft: "30px",
                  lineHeight: "20px",
                  fontSize: "15px",
                  fontWeight: "bold"
                }}
              >
                Check Details
              </Link>
              <button
                style={{
                  backgroundColor: "rgba(147,85,72,1)",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  lineHeight: "20px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  // width : '100px'
                }}
                onClick={() => handleDelete(university.name)}
              >
                Remove
              </button>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListingPage;
