import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Modal from './models/excel_modal'
import Excel_Upload from './models/excel_upload'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <script src="http://localhost:8097"></script>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setModalOpen(true)}>
          Open Modal
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        <Excel_Upload />

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
