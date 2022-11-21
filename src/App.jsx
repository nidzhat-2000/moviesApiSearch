import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default App;
