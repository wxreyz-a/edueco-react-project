import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home content', () => {
  localStorage.setItem('edueco_consent', 'denied');
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headline = screen.getByText(/Votre bien-être financier est notre priorité/i);
  expect(headline).toBeInTheDocument();
});
