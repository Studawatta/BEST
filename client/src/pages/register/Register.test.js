import { fireEvent, render, screen } from '@testing-library/react';
import Register from './Register';

test('username,email, password inputs should be rendered', () => {
  render(<Register />);

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  expect(
    usernameInputEl && emailInputEl && passwordInputEl
  ).toBeInTheDocument();
});
test('button should be rendered', () => {
  render(<Register />);

  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeInTheDocument();
});

test('username input should be empty', () => {
  render(<Register />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe('');
});
test('email input should be empty', () => {
  render(<Register />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl.value).toBe('');
});
test('password input should be empty', () => {
  render(<Register />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe('');
});

test('username input should change', () => {
  render(<Register />);

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = 'test';
  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});
