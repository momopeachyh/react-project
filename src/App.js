import "./App.css";
// import Sibling1 from "./Sibling1";
// import Sibling2 from "./Sibling2";
// import DynamicContent from "./DynamicContent.js";
import { useState, useEffect } from "react";
// import NumberList from "./NumberList.js";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import Home from "./Home.js";
// import Profile from "./Profile.js";
// import About from "./About.js";
// import Error from "./Error.js";
// import Redirect from "./Redirect.js";
import NewComponent from "./NewComponent";
import User from "./User";
// const [selectedMessage, setMessage] = useState("");
// const [user, changeUser] = useState("userA");
// const numbers = [1, 2, 3, 4, 5];
function App() {
  return (
    <div>
      <NewComponent />
    </div>
  );
  // window.fetch = jest.fn(() => {
  //   const user = { name: "Jack", email: "jack@abc.com" };
  //   return Promise.resolve({
  //     json: () => Promise.resolve(user),
  //   });
  // });

  // const [user, setUser] = useState(null);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users/1")
  //     .then((response) => response.json())
  //     .then((user) => setUser(user))
  //     .catch((error) => setError(error.message));
  // }, []);
  // if (error) {
  //   return <span>error</span>;
  // }
  // return (
  //   <div className="App">
  //     {user ? <User user={user} /> : <span>Loading</span>}
  //   </div>
  // );
}

export default App;
