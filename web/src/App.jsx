import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './componentes/Welcome'
import Pass from './componentes/passforg'
import NewPass from './componentes/newPass';
import NewCont from './componentes/newCont';
import Home from './componentes/Home';
import Artigo from './componentes/Artigo';
import './componentes/Home.css'
import Help from './componentes/Help';
import Contact from './componentes/Contact';
import Perdidos from './componentes/Perdidos';
import Achados from './componentes/Achados';
import Devolvidos from './componentes/Devolvidos';
import DocPerdidos from './componentes/DocPerdidos';
import ObjPerdidos from './componentes/ObjPerdidos';
import OtrPerdidos from './componentes/OtrPerdidos';
import DocAchados from './componentes/DocAchados';
import ObjAchados from './componentes/ObjAchados';
import OtrAchados from './componentes/OtrAchados';

function App() {

  return (
    <div className="App">
      
      <Router>
        
        <Routes>
          <Route path='/home' element={<Welcome />}></Route>
          <Route path='/forgetpass' element={<Pass />}></Route>
          <Route path='/new-pass' element={<NewPass />}></Route>
          <Route path='/new-count' element={<NewCont />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/perdidos' element={<Perdidos />}></Route>
          <Route path='/doc-perdidos' element={<DocPerdidos />}></Route>
          <Route path='/obj-perdidos' element={<ObjPerdidos />}></Route>
          <Route path='/otr-perdidos' element={<OtrPerdidos />}></Route>
          <Route path='/achados' element={<Achados />}></Route>
          <Route path='/doc-achados' element={<DocAchados />}></Route>
          <Route path='/obj-achados' element={<ObjAchados />}></Route>
          <Route path='/otr-achados' element={<OtrAchados />}></Route>
          <Route path='/devolvidos' element={<Devolvidos />}></Route>
          <Route path='/add-artigo' element={<Artigo />}></Route>
          <Route path='/help' element={<Help />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>

      </Router>
    </div>
  )
}
export default App