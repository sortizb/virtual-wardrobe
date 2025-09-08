import './App.css';
import CollectionDisplay from './pages/CollectionDIsplay';


function App() {

  return (
    <>
      <div id='app_container' className='flex flex-col items-center gap-8 mb-5 md:mb-10 lg:mb-15'>
        <CollectionDisplay whatToDisplay={'clothing'}/>
      </div>
    </>
  )
}

export default App
