import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Closet from './pages/Closet';

function App() {

  return (
    <>
      <div id='app_container' className='flex flex-col items-center gap-8 mb-15'>
        <Navbar/>
        <Home/>
        <Closet/>
      </div>
    </>
  )
}

export default App
