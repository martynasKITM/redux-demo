import './App.css';
import TopNav from "../nav/TopNav";
function App() {
  return (
    <div className="App" style={{marginTop:'10px'}}>
      <div className="container">
          <div className="row">
              <div className="col-md-7 m-auto">
                <TopNav/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
