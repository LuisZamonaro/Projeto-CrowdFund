import { useState } from 'react'
import iconCheck from '../images/icon-check.svg'


export default function ModalComplete({completeMenu, setCompleteMenu}) {

    

    return (
        <div className={`containerModalComplete ${completeMenu == true ? 'active' : ''}`}>
            <div className="wrapperModalComplete">
                <div className="imageCheck">
                    <img id='imgCheck' src={iconCheck} />
                </div>
                <div className="titleModalComplete">
                    Thanks for your support!
                </div>
                <div className="textModalComplete">
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.
                </div>
                <div className="buttonGotIt">
                    <button id='buttonGotIt' onClick={() => setCompleteMenu(false)}>Got it!</button>
                </div>
            </div>

        </div>
    )
}