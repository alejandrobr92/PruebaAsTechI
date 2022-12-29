import React from 'react';
import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {weatherTypes} from "./Redux/Reducers/WeatherReducer";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import WeatherTable from "./Components/WeatherTable";
import DetailsPage from "./Components/DetailsPage";

function App() {

  const dispatch = useDispatch();

  useEffect(  () => {
    console.count('Getting all');
    const getData = async () => {
      const response = await fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas');
      const data = await response.json();
      dispatch({type: weatherTypes.SET_ALL, payload: data })
    }
    getData();
  }, []);

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={  <WeatherTable />} />
            <Route path='/:id' element={  <DetailsPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
