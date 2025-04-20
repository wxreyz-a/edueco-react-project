import React from 'react';
import { render, screen } from '@testing-library/react';
import GuideEpargne from './guide_epargne';

describe('GuideEpargne Component', () => {
  test('renders GuideEpargne component and checks for heading', () => {
    render(<GuideEpargne />);
    // Adjust the text below to match a heading or text you expect in GuideEpargne component
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });
});
