import { render, screen } from '@testing-library/react';
import MyPage from './MyPage';

test('renders mypage', () => {
  render(<MyPage />);
  const linkElement = screen.getByText(/mypage/i);
  expect(linkElement).toBeInTheDocument();
});