import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders the Home component and checks for main heading', () => {
    render(<Home />);
    // Adjust the text below to match a heading or text you expect in Home component
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });
});
