import ListingController from './ListingController';

describe('DetailsPage component', () => {
    test('fetchUniversities toBeInstanceOf function', () => {
        expect(ListingController.fetchUniversities).toBeInstanceOf(Function);
      });
      
});