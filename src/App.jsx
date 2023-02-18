import './App.css'
import SideBar from './Sidebar'
import Navbar from './Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SideBar />
      <div className='w-4/5'><Navbar/></div>
    </>
  )
}

export default App
