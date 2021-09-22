import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const newElem = (
  <div>
    <img alt="logo" src="ivkhk.png"></img>
  </div>
)

const Header = () => {
  return <h2> Hello! </h2>
}

const Field = () => {
  const holder = "Enter here!"
  return <input type='text' placeholder='{holder}'></input>
}

const Button = () => {
  const res = () => {
    return 'Log in!'
  }
  return <button>{res()}</button>
}

const MyApp = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Button/>
    </div>
  )
}

ReactDOM.render(
  //<React.StrictMode>
  //<App />
  //</React.StrictMode>,
  //newElem,
  <MyApp/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
