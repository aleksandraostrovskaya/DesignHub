import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import VacanciesPage from './pages/vacanciesPage/VacanciesPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/vacancies' element={<VacanciesPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
