import logo from './logo.svg';
import './App.css';



import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ExpenseTracker from './pages/ExpenseTracker';
import Counter from './pages/Counter'
import Form from './pages/Form';
import Rendering from './pages/Rendering';
import Test from './pages/Test';
import PNF from './pages/PNF';
import Navbar from './components/Navbar';
import PracticeHooks from './pages/PracticeHooks';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
          <Routes>
                <Route path='/' element = {<ExpenseTracker/>}/>
                <Route path='/counter' element = {<Counter/>}/>
                <Route path='/form' element = {<Form/>}/>
                <Route path='/condition' element = {<Rendering/>}/>
                <Route path='/xyz' element = {<Test/>}/>
                <Route path="hooks" element={<PracticeHooks/>}/>
                <Route path='/*' element={<PNF/>}/>
          </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
