import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <p>
          This project was created by Nataliia Opanasiuk and is {""}
          <a
            href="https://github.com/NataliiaOpanasiuk/react-weather-app2"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-on.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </p>
      </div>
    </div>
  );
}
