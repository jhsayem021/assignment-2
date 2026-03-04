import './App.css'
import CountCard from './components/CountCard/CountCard'
import Navber from './components/Navber/Navber'
function App() {

  return (
    <>
      <Navber></Navber>
      <div className='flex justify-evenly my-8'>
        <CountCard
          title="In-Progress"
          color1="#632EE3"
          color2="#9F62F2"
        ></CountCard>
        <CountCard
          title="Resolved"
          color1="#54CF68"
          color2="#00827A"
        ></CountCard>
      </div>
      {/* Tickets Section */}
      <div>
        
      </div>
    </>
  )
}

export default App
