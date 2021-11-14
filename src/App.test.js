import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Friendsbook logo', () => {
  render(<App />);
  const textElement = screen.getByText("FriendsBook");
  expect(textElement).toBeInTheDocument();
});
