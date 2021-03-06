import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
            <h1>FIRST APP</h1>
            <p>Hello This is my First React app</p>
    </div>
  );
}

function NewApp() {
    return(
      <div className="NewApp">
         <h1>Hello Folks!</h1>
         <p>MKC biryani</p>
      </div>
    )
}

let myFunc = 
  {App,NewApp};

export default myFunc;

var name="Adnan";

if (name==='Adnan'){
  alert("Hello Adnan");
}

else {
 alert("Who are you?") 
}