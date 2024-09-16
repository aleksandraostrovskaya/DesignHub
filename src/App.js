import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import VacanciesPage from './pages/vacanciesPage/VacanciesPage'
import SupportPage from './pages/supportPage/SupportPage';
import EducationPage from './pages/educationPage/educationPage';
import ContactPage from './pages/contactPage/ContactPage';
import SpecialistsPage from './pages/specialistsPage/SpecialistsPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/vacancies' element={<VacanciesPage/>} />
        <Route path='/education' element={<EducationPage/>} />
        <Route path='/support' element={<SupportPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/specialists' element={<SpecialistsPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
