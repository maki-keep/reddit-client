import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import App from './App';
import store from './store';

describe('index', () => {
  test('renders App component wrapped in Provider imported from react-redux', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.debug();
  });
});
