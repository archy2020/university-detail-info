import React from 'react';
import { render, screen  } from '@testing-library/react';
import DetailView from '../DetailView';

describe('DetailsPage component', () => {
    test('renders "University not found" when no university with the provided name is found', () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(JSON.stringify([]));
        render(<DetailView />);
        expect(screen.getByText('University not found')).toBeInTheDocument();
      });
      
});