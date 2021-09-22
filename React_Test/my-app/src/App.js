import logo from './ivkhk.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          IVKHK is very good college!
        </p>
        <a
          className="App-link"
          href="https://kutsehariduskeskus.ee"
          target="_blank"
          rel="noopener noreferrer"
        >
          Study There!
        </a>
      </header>
    </div>
  );
}

export default App;
