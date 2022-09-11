import './App.css';
import CollegeInfo from './Components/CollegeInfo';
import StudentInfo from './Components/StudentInfo';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';


const App = () => {
  return (<>
  <Router>
  <Routes>

    <Route exact path="/" element={<StudentInfo />} />
    <Route exact path="/CollegeInfo" element={<CollegeInfo />} />
    
  </Routes>
  </Router> 
  </>)
}

export default App