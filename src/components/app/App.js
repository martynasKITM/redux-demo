import './App.css';
import TopNav from "../nav/TopNav";
import TodoList from "../todo/TodoList";
function App() {
  return (
    <div className="App" style={{marginTop:'10px'}}>
      <div className="container">
          <div className="row">
              <div className="col-md-7 m-auto">
                <TopNav/>
                  <TodoList/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
