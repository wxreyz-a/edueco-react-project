// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});

const originalConsoleWarn = console.warn.bind(console);

beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((...args) => {
    const [firstArg] = args;
    if (typeof firstArg === 'string' && firstArg.includes('React Router Future Flag Warning')) {
      return;
    }
    originalConsoleWarn(...args);
  });
});

afterAll(() => {
  console.warn.mockRestore();
});
