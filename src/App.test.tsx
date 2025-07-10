import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders underground metal website', () => {
  render(<App />);
  const brandElement = screen.getByText(/CRIMSON THRONE/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders underground navigation', () => {
  render(<App />);
  const covenLink = screen.getByText(/COVEN/i);
  const soundsLink = screen.getByText(/SOUNDS/i);
  expect(covenLink).toBeInTheDocument();
  expect(soundsLink).toBeInTheDocument();
});

test('renders theme switcher', () => {
  render(<App />);
  const themeElement = screen.getByText(/Theme/i);
  expect(themeElement).toBeInTheDocument();
});
