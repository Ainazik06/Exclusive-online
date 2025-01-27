
import './App.css'
import {RouterProvider} from 'react-router-dom'
import {myRouter} from './routers.jsx'
import '../src/index.css'

export default function App() {

  return (
    <>
      <div className='app'>
        <RouterProvider router={myRouter} />
      </div>
    </>
  )
}



