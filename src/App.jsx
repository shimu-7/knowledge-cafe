
import './App.css'
import Carts from './Components/Carts'

function App() {

  return (
    <>
      
     <div className='mt-10'>
     <h1 className='text-3xl font-semibold text-center mb-4'>Course Registration</h1>
     <div className='px-10'>
      {/* showing cards */}
      <Carts></Carts>
      
     </div>

     {/* <div>
     
     </div> */}
     </div>
      
    </>
  )
}

export default App
