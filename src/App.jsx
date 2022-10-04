
import RouteApp from './Routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css'


function App() {


  return (
    <div>
      <RouteApp />
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default App
