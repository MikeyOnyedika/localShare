import './App.css';
import { Outlet } from 'react-router-dom'
import LogoBar from './components/LogoBar'
function App() {

  return (
    <>
      <header>
        <LogoBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
