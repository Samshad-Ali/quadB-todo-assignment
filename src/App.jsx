import React from 'react'
import Header from './components/Header'
import Taskinput from './components/Taskinput';
import Tasklist from './components/Tasklist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  return (
    <main className='flex flex-col items-center w-full gap-4'>
      <nav className='w-full '>
        <Header/>
      </nav>
      {/* input section  */}
      <section className='w-[310px] md:w-[420px] bg-yellow-200 p-4 rounded-md'>
        <Taskinput/>
      </section>
      {/* list section */}
      <section>
        <Tasklist/>
      </section>
      <ToastContainer/>
    </main>
  )
}

export default App