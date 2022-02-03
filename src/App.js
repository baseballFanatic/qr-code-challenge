import './App.css';
import code from './images/image-qr-code.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={code} alt="qr code" />
          <div className="main-content">
            <p className="main-content--dark">Improve your front-end skills by building projects</p>
            <p className="main-content--light">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
