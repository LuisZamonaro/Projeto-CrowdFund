import { useState } from 'react'
import HeaderPage from './HeaderPage'
import Modal1 from './Modal1'
import ModalComplete from './ModalComplete'
import StandartContainer from './StandartContainer1'
import StandartContainer2 from './StandartContainer2'
import StandartContainer3 from './StandartContainer3'
import './styles.css'


function App() {

  const [openModal, setOpenModal] = useState(false)
  const [completeMenu, setCompleteMenu] = useState(false)

  return (
    <div className="container">
      <HeaderPage />
      
      <div className="containerStandart">
        <StandartContainer />
        <StandartContainer2 />
        <StandartContainer3 setOpenModal={setOpenModal} />
        <div className='containerModal'>
          {
            openModal && (
              <>
                <Modal1 setOpenModal={setOpenModal}
                  setCompleteMenu={setCompleteMenu} />
                <div className="shadowModal">
                </div>
              </>
            )
          }
          {
            completeMenu && (
              <>
                <div className="shadowModal">
                </div>
                <ModalComplete
                  completeMenu={completeMenu}
                  setCompleteMenu={setCompleteMenu} />
              </>
            )
          }
        </div>
      </div>
    </div>

  )
}

export default App
