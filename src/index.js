import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const words = ["FRONT END DEVELOPER", "PROJECT LEADER", "UX DEVELOPER",]; 
let index = 0; 

function changeWord() { 
    index = (index + 1) % words.length;  
    document.getElementById("wordContainer").innerText = words[index];
   
} 

setInterval(changeWord, 1000);



document.addEventListener('DOMContentLoaded', function() {
  // your code here
  setTimeout(function() {
     var el = document.getElementsByClassName('initial_color');
     for (var i = 0, n = el.length; i < n; ++i) {
         var curr = el[i];
         curr.classList.add('changed_color');
     }
     
  }, 2000);
}, false);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
