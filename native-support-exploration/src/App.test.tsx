import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders native support exploration text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Native Support Exploration/i);
  expect(linkElement).toBeInTheDocument();
});
