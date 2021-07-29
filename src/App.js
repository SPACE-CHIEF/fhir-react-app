import React from "react"
import { Navigation, Main }  from "./components"
import './scss/style.scss'
import FhirClientProvider  from './components/FhirClientProvider';

export default function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
    </div>
  );
}