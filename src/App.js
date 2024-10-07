
import { React } from "react";
import './App.css';
import BookList from "./components/bookList";

function App() {
  return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
        }}
    >
        {" "}
        <h1 className="geeks">Book Names</h1>
        <BookList />
    </div>
);
}

export default App;
