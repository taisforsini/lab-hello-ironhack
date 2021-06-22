import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="container">
      <nav></nav>
      <header>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </header>
      <section className="row align-items-center">

        <div className="col">
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="col">
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="col">
          <h2>Single-Way</h2>
          <p>A set o immutable values are passed to their component's.</p>
        </div>
        <div className="col">
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
        
      </section>
    </div>
  );
}

export default App;
