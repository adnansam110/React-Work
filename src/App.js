import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Msg from './components/msg';

function App() {
  return (
    <div className="App">
      <Msg></Msg>

      {/* <Greet name="Adnan" heroName="Spiderman">
        <p>This is a children props</p>
      </Greet>
      <Greet name="Usman" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Subhan" heroName="Restman"></Greet>
      <Greet name="Muneeb" heroName="Ajay Devgan"></Greet>

      <Welcome name="Adnan" heroName="Spiderman"></Welcome>
      <Welcome name="Usman" heroName="Batman"></Welcome>
      <Welcome name="Subhan" heroName="Restman"></Welcome> */}
    </div>
  );
}

export default App;
