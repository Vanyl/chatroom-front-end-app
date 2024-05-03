import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import H1 from './components/Title'
import { DefaultButton, ExtendedButton } from './components/Buttons'
import Wrapper from './components/Wrapper'
// import ChatRoom from './components/ChatRoom'

function App() {


  return (
    <>
        <div>
        <h1>Le Chat room</h1>
        </div>
        <div className='form-div'>
        <Login/>
        <Register/>
         {/* <ChatRoom/> */}
        </div>
    </>
  )
}

export default App
