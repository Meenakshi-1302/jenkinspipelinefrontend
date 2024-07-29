import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Add from './Add'; // Adjust the path as needed

jest.mock('axios');
jest.mock('react-router-dom')

test('renders User Name label', () => {
  render(<Add />);
  const linkElement = screen.getByRole("namelabel");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("Name");
});
