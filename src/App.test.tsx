import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders underground metal website', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/CRIMSON THRONE/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('renders underground navigation', () => {
  render(<App />);
  const covenElements = screen.getAllByText(/COVEN/i);
  const soundsElements = screen.getAllByText(/SOUNDS/i);
  expect(covenElements.length).toBeGreaterThan(0);
  expect(soundsElements.length).toBeGreaterThan(0);
});

test('renders theme switcher', () => {
  render(<App />);
  const themeElement = screen.getByText(/Theme/i);
  expect(themeElement).toBeInTheDocument();
});

test('renders underground sections', () => {
  render(<App />);
  const ritualsElement = screen.getByText(/RITUALS/i);
  const showsElement = screen.getByText(/SHOWS/i);
  const artifactsElements = screen.getAllByText(/ARTIFACTS/i);
  expect(ritualsElement).toBeInTheDocument();
  expect(showsElement).toBeInTheDocument();
  expect(artifactsElements.length).toBeGreaterThan(0);
});
