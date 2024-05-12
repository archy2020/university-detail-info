import UniversityUtil from "../utils/UniversityUtil";

class ListingController {
  static async fetchUniversities() {
    return await UniversityUtil.findAndStoreData();
  }
}

export default ListingController;
