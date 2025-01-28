import logo from './logo.svg';
import './App.css';
import { Myheader } from './components/Myheader';
import { Secondsection} from './components/Secondsection';
import {Cards} from './components/Cards'
import {Ido} from './components/Ido'
function App() {
  return (
    <div className="App">
     <Myheader></Myheader>
   <Secondsection></Secondsection>
   <Cards></Cards>
<Ido></Ido>
    </div>
  );
}

export default App;
