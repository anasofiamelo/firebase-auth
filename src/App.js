import { Home, Login, Register } from './screens/index'
import './App.css';
import { UserProvider } from './contexts/user'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router> 
      <UserProvider> {/* arquivo que fica salvo as informações do usuário */}
        <Routes> {/* engloba todas as rotas */}
          <Route path='/' element={<Login />} /> {/* cada rota que existe na aplicação */}
          <Route path='/register' element={<Register />} /> {/* cada rota que existe na aplicação */}
          <Route path='/home/:uid' element={<Home />} /> {/* cada rota que existe na aplicação */}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;