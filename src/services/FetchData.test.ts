import { fetchUniversityList } from './FetchData';

describe('DetailsPage component', () => {
    test('fetchUniversityList toBeInstanceOf function', () => {
        expect(fetchUniversityList).toBeInstanceOf(Function);
      });
      
});