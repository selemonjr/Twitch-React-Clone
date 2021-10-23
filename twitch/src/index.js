import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import "./index.css"
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
const App = () => {
  return (
    <>
     <Navbar/>
     <Sidebar/>
     <Content/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

