import { useState } from 'react';
import Card from '../../Card'
import imgClose from '../images/icon-close-modal.svg'

// aqui estçao todos eles '<Card/>'


export default function Modal1({setOpenModal, setCompleteMenu}) {
    const [currentId, setCurrentId] = useState(0);
    return (
        <div className="containerModal1">
            <div className="wrapperModal1">
                <div className="imageCloseModal" onClick={() => setOpenModal(false)}>
                    <img id='imgClose' src={imgClose} />
                </div>
                <div className="backThisProject">
                    Back this project
                </div>
                <div className="wantToSup">
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </div>
                {/*  */}
                <Card
                id={1}
                title={'Pledge with no modal'}
                minQuantity={0}
                description={`Choose to support us without a reward if you simply believe in our project. As a backer,
                you will be signed up to receive product updates via email.`}
                // esses 2 são para ativar e desativar a div 'isCardSelected
                currentId={currentId}
                setCurrentId={setCurrentId}
                setCompleteMenu={setCompleteMenu}
                setOpenModal={setOpenModal}
                />
                <Card 
                id={2}
                title={'Bamboo Stand'}
                subTitle={'Pledge $25 or more'}
                minQuantity={25}
                quantity={101}
                description={`You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                you’ll be added to a special Backer member list.`}
                currentId={currentId}
                setCurrentId={setCurrentId}
                setCompleteMenu={setCompleteMenu}
                setOpenModal={setOpenModal}
                />
                <Card 
                id={3}
                title={'Black Edition Stand'}
                subTitle={'Pledge $75 or more'}
                minQuantity={75}
                quantity={64}
                description={`You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                member list. Shipping is included.`}
                currentId={currentId}
                setCurrentId={setCurrentId} 
                setCompleteMenu={setCompleteMenu}
                setOpenModal={setOpenModal}
                />
                
                <Card 
                id={4}
                title={'Mahogany Special Edition'}
                subTitle={'Pledge $200 or more'}
                minQuantity={200}
                quantity={0}
                description={`You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                to our Backer member list. Shipping is included.`}
                currentId={currentId}
                setCurrentId={setCurrentId} 
                setCompleteMenu={setCompleteMenu}
                setOpenModal={setOpenModal}
                />
            </div>
        </div>
    )
}