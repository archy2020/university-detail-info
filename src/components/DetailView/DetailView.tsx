import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UniversityDetail from "../../models/UniversityDetail";
import '../../assets/css/style.css';

const DetailsPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [university, setUniversity] = useState<UniversityDetail | null>(null);
  console.log(university);


  useEffect(() => {
    // Fetch university details from local storage based on the provided name
    const universitiesData = localStorage.getItem("universities");
    if (universitiesData) {
      const universities: UniversityDetail[] = JSON.parse(universitiesData);
      const foundUniversity = universities.find((univ) => univ.name === name);
      if (foundUniversity) {
        setUniversity(foundUniversity);
      }
    }
  }, [name]);

  return university ? (
    <div
      className="container" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "top",
        height: "80vh",
        padding: "60px 0px "
      }} >
      <div className="container-class">
        <h1 className="container-h1"> Please find details of the University you selected</h1><br></br>
        <h2 style={{ margin: "10px 0" }}>{name}</h2>
        <p style={{ margin: "10px 0" }}>
          <strong>Name:</strong> {university.name}
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Country:</strong> {university.country}
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Domains:</strong>{" "}
          {university.domains && university?.domains.length > 0
            ? university?.domains[0]
            : ""}
        </p>

        <p style={{ margin: "0" }}>
          <strong>Web Link:</strong>{" "}
          {university.web_pages && university?.web_pages.length > 0 ? (
            <a style={{ color: "red" }}
              href={university.web_pages[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {university.web_pages[0]}
            </a>
          ) : (
            ""
          )}
        </p>
          
        <div style={{ margin: "40px 0" , backgroundColor: "rgba(176,207,196)", padding: "60px 60px 60px 60px" }}>
          <h2 style={{ margin: "40px 0" , color: "green"}} > Please find below the list of courses offered : </h2>
          <ol>
            <li> <p> BTech, BE, MTech, PhD, Integrated BTech-MTech </p> </li>
            <li> <p> Graduation/ Postgraduation/ Doctorate/Diploma </p> </li>
            <li> <p> BTech, BE, MTech, PhD, Integrated BTech-MTech </p> </li>
            <li> <p> Graduation/ Postgraduation/ Doctorate/Diploma </p> </li>
            <li> <p> BTech, BE, MTech, PhD, Integrated BTech-MTech </p> </li>
            <li> <p> Graduation/ Postgraduation/ Doctorate/Diploma </p> </li>
            <li> <p> BTech, BE, MTech, PhD, Integrated BTech-MTech </p> </li>
            <li> <p> Graduation/ Postgraduation/ Doctorate/Diploma </p> </li>
          </ol>
        </div>

      </div>
    </div>
  ) : (
    <div>University not found</div>
  );
};

export default DetailsPage;
