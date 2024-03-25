import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "firebase";
import firebase from "firebase";

const App = () => {
  const user = null;

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
