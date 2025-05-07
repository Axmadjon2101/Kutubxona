import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Hompage';
import Navbar from './pages/Navbar';
import AboutUs from './pages/aboutUs';
import Books from './Books';
import UzbekLiterature from './pages/kitoblar/UzbekLiterature';
import WorldLiterature from './pages/kitoblar/WorldLiterature';
import Poetry from './pages/kitoblar/Poetry';
import ScienceBooks from './pages/kitoblar/ScienceBooks';
import HistoryBooks from './pages/kitoblar/HistoryBooks';
import ChildrenBooks from './pages/kitoblar/ChildrenBooks';
const App = () => {
  return (
  
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/uzbek-literature' element={<UzbekLiterature/>}/>
          <Route path='/world-literature' element={<WorldLiterature/>}/>
          <Route path='/poetry' element={<Poetry/>}/>
          <Route path='/science-books' element={<ScienceBooks/>}/>
          <Route path='/history-books' element={<HistoryBooks/>}/>
          <Route path='/children-books' element={<ChildrenBooks/>}/>
        </Routes>
      </div>
    
  );
};

export default App;
