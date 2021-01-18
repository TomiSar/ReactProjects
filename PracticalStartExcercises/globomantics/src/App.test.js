import React from 'react';
import ReactDOM from 'react-dom';
import App from './main-page';

//https://jestjs.io/docs/en/tutorial-react.html
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
