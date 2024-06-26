import { useState } from 'react'
import Modal from './models/excel_modal'
import Excel_Upload from './models/excel_upload'
import CommentBox from './models/comment_test'
import ParentComponent from './components/lifecycle'
import ReturnComponent from './components/return_test'
import { CreateCustomer } from './components/CustomerInfo'
import { Input } from './components/ui/input'

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <script src="http://localhost:8097"></script>
      <div>
        <h1>React Study</h1>
        <CreateCustomer />
        <Input type="text" placeholder="Enter the name" />
        {/* <Top>
        </Top>
        <LeftMenu>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Introduce</MenuItem>
            <MenuItem>Notice</MenuItem>
          </MenuList>
        </LeftMenu> */}
      </div>
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
      <CommentBox></CommentBox>
      <ParentComponent></ParentComponent>
      <div><h1>Cafe24 Shipping Issue Check</h1></div>
      <div>
        <ReturnComponent></ReturnComponent>
      </div>
      {/* <Footer></Footer> */}
    </>
  )
}


export default App
