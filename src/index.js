import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { oauth2 as SMART } from "fhirclient";

SMART.init({
  iss:
      "https://fhir-react.herokuapp.com/",
  redirectUri: "https://fhir-react.herokuapp.com/",
  clientId: "127afa4e-286f-47ae-ac19-ecc3d7f4ddac",
  scope: "launch/patient offline_access openid fhirUser",

  // WARNING: completeInTarget=true is needed to make this work in the codesandbox
  // frame. It is otherwise not needed if the target is not another frame or window
  // but since the entire example works in a frame here, it gets confused without
  // setting this!
  // completeInTarget: true
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
