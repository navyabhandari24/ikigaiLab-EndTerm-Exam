import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculator from "./Calculator";
import Todo from "./Todo";

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="container">
              <Link to="/" className="navbar-brand" style={{color:'black'}}>
                End Term Exam
              </Link>
              <div className="collapse navbar-collapse justify-content-end ">
                <ul className="navbar-nav gap-4 ">
                  <li className="nav-item">
                    <Link to="/calculator" className="nav-link" style={{color:'black'}}>
                      Calculator
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/todo" className="nav-link" style={{color:'black'}}>
                      Todo List
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>

        <footer className="bg-dark text-white mt-auto">
          <div className="container mt-3 text-center">
            <p>&copy; Copyright 2023 - End Term Exam</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
