import { fetchUniversityList } from "../services/FetchData";

const saveDataToLocal = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getDataFromLocal = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

class UniversityUtil {
  static async findAndStoreData() {
    try {
      const cachedData = getDataFromLocal("universities");
      if (cachedData) {
        return cachedData;
      } else {
        const data = await fetchUniversityList();
        saveDataToLocal("universities", data);
        return data;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch universities.");
    }
  }
}

export default UniversityUtil;
