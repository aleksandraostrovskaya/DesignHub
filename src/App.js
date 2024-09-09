import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import VacanciesPage from './pages/vacanciesPage/VacanciesPage'
import EducationPage from './pages/educationPage/educationPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/vacancies' element={<VacanciesPage/>} />
        <Route path='/education' element={<EducationPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
