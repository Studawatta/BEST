import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

test('Home,About,Contact,Login and Register bottons should be renderd', () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={<NavBar />}
        />
      </Routes>
    </MemoryRouter>
  );

  const homebuttonEl = screen.getByText(/home/i);
  const aboutbuttonEl = screen.getByText(/about/i);
  const contactbuttonEl = screen.getByText(/contact/i);
  const loginbuttonEl = screen.getByText(/login/i);
  const registerbuttonEl = screen.getByText(/register/i);

  expect(
    homebuttonEl &&
      aboutbuttonEl &&
      contactbuttonEl &&
      loginbuttonEl &&
      registerbuttonEl
  ).toBeInTheDocument();
});
test('Home button shoud load home page', () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={<NavBar />}
        />
      </Routes>
    </MemoryRouter>
  );

  const homebuttonEl = screen.getByText(/home/i);

  expect(homebuttonEl.href).toContain('/');
});
test('About button shoud load about page', () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={<NavBar />}
        />
      </Routes>
    </MemoryRouter>
  );

  const aboutbuttonEl = screen.getByText(/about/i);

  expect(aboutbuttonEl.href).toContain('/about');
});
test('Contact button shoud load contact page', () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={<NavBar />}
        />
      </Routes>
    </MemoryRouter>
  );

  const contactbuttonEl = screen.getByText(/contact/i);

  expect(contactbuttonEl.href).toContain('/contact');
});
test('Login button shoud load login page', () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={<NavBar />}
        />
      </Routes>
    </MemoryRouter>
  );

  const loginbuttonEl = screen.getByText(/login/i);

  expect(loginbuttonEl.href).toContain('/login');
});
test('Register button shoud load register page', () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={<NavBar />}
        />
      </Routes>
    </MemoryRouter>
  );

  const registerbuttonEl = screen.getByText(/register/i);

  expect(registerbuttonEl.href).toContain('/register');
});
