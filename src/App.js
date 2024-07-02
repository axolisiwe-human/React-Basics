import './App.css';
import QRCODE from './qrcode.png'


function App() {
  return (
    <div className="container">
        <div className="App">
      <div className='image'>
       <img src={QRCODE} alt="QR code" />

      </div>
      <div className='paragraph1'>
        <b><p>Improve your front-end skills by building projects</p></b>
      </div>
      <div className='paragraph2'>
        <p>Scan the QR code to visit Front-end Mentor and take your coding skills to the next level</p>
      </div>
    </div>

    </div>
  
  );
}

export default App;
