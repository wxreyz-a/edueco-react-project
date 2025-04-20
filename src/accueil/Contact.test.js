import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  test('renders Contact component and checks for heading', () => {
    render(<Contact />);
    // Adjust the text below to match a heading or text you expect in Contact component
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });
});
