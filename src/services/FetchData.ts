import axios from "axios";
import UniversityList from "../models/UniversityList";

const URL =
  "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates";

const fetchUniversityList = async (): Promise<UniversityList[]> => {
  try {
    const res = await axios.get(URL);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data from Api");
  }
};

export { fetchUniversityList };
