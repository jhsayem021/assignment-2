import { Suspense, useState } from 'react'
import './App.css'
import AllTickets from './components/AllTickets/AllTickets'
import CountCard from './components/CountCard/CountCard'
import Navber from './components/Navber/Navber'
import TaskList from './components/TaskList/TaskList'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'
function App() {
  const [taskAdded, setTaskAdded] = useState([])
  const [taskResolved, setTaskResolved] = useState([])
  const fetchAllTickets = async () => {
    const res = await fetch('./tickets.json');
    return res.json();
  }

  const TiketsPromise = fetchAllTickets();

  // console.log(allTickets);

  const handleTaskAdd = (ticket) => {
    console.log(ticket)
    if (taskAdded.find(t => t.id === ticket.id)) {
      toast.warn('🦄 This Ticket Already Added!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    setTaskAdded([...taskAdded, ticket])
    toast.info('🦄 Task Added Successfylly', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }
  const handleTaskResolve = (ticket) => {
    const remainingTasks = taskAdded.filter(t => t.id !== ticket.id);
    setTaskAdded(remainingTasks);
    setTaskResolved([...taskResolved, ticket]);
    toast.success('🦄 Task Completec successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <>
      <Navber></Navber>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <div className='lg:flex lg:justify-evenly my-8 gap-x-4'>
        <CountCard
          title="In-Progress"
          color1="#632EE3"
          color2="#9F62F2"
          taskAdded={taskAdded}

        ></CountCard>
        <CountCard
          title="Resolved"
          color1="#54CF68"
          color2="#00827A"
          taskResolved={taskResolved}
        ></CountCard>
      </div>
      {/* Tickets Section */}
      <div className='lg:flex  lg:justify-between max-w-[1440px] mx-auto'>
        <Suspense fallback={<div>Loading user...</div>}>
          <AllTickets TiketsPromise={TiketsPromise} handleTaskAdd={handleTaskAdd}></AllTickets>
        </Suspense>
        <TaskList taskAdded={taskAdded} taskResolved={taskResolved} handleTaskResolve={handleTaskResolve}></TaskList>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
