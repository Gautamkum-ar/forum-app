import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/landing/Landing";
import { Comment } from "./pages/comment/Comment";

function App() {
  return (
    <div className="App">
      <nav>
        <p>MyForum</p>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/comment/:postId" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
