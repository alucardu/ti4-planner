import logo from './logo.svg';
import './App.css';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './server/apolloClient';
import MyComponent from './components/MyComponent/MyComponent.lazy';

const App = () => {

  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MyComponent />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
