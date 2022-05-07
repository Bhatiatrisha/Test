import './App.css';
import Feedback from './Components/Feedback';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <h1 style={{color:"#5658DD" , textAlign:"center",fontSize:"4rem",marginTop:"20px"}}>Feedback</h1>
      <Feedback />
    </div>
  );
}

export default App;
