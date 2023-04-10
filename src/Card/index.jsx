import { useState, useEffect } from 'react';

export default function Card({ title, description, quantity, subTitle, currentId, setCurrentId, id, minQuantity, setCompleteMenu, setOpenModal }) {
    const [isCardSelected, setIsCardSelected] = useState(false);
    const [quantityState, setQuantityState] = useState('');
    const [error, setError] = useState(false);
    const [disable, setDisable] = useState(true)

    // aqui é unitário, cada um tem o seu

    useEffect(() => {
        setIsCardSelected(id === currentId);
        // se for no que está sendo clicado, ele seta o estado pra true, se não, pra false
    }, [currentId, id])

    //  useEffect : verificação de quando acontece qualquer ação na página

    function handleQuantity(event) {
        // se não existir valor // falso, vazio
        if (!event.target.value) {
            setQuantityState('');
            setDisable(true)
            return;
            //mania do js de converter tudo pra true, false e pode dar avisos no console
        }

        setQuantityState(event.target.value.slice(0, 3));

        if (parseFloat(event.target.value) >= minQuantity) {
            setError(false);
            setDisable(false)
        }else {
            setError(true);
            setDisable(true)
        }
    };
    
    return (
        <div className="containerDonateModal1" id={quantity === 0 ? 'mahogany' : ''}>
            <div className="topCDM">
                <input type="radio" name='check' disabled={quantity === 0 ? true : false} onClick={() => setCurrentId(id)} />
                <div className="containerTitleCDM">
                    <div className="titleCDM">
                        <div className="titleLefCDM">
                            {title}
                        </div>
                        <div className="titleRigCDM">
                            <span id='pledgeValue'>{subTitle}</span>
                        </div>
                    </div>
                    <div className="numberLeft">
                        {/* se for o quantity dele, ex : 101, ele vai mostrar o número (aqui) e o left */}
                        {quantity && (
                            <>
                                <span className="numberP3">{quantity}{/*aqui*/}</span>
                                left
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="textCDM">
                {description}
            </div>
            <div className="numberLeftM">
                {quantity && (
                    <>
                        <span className="numberP3">{quantity}{/*aqui*/}</span>
                        left
                    </>
                )}
            </div>
            {
                isCardSelected && (
                    <div className="containerPledgeDonate">
                        <div className="divisoriaModal">
                            ______________________________________________________________________________________________________________________________________________________________________
                        </div>
                        <div className="divisoriaModalM">
                            ____________________________________
                        </div>
                        <div className="oi">
                        <div className="enterYourPledge">
                            Enter your pledge
                        </div>
                        <div className="valueDonateContinue">
                            <div className="valueDonate">
                                $ <input className='inputDonate' id='donate1' type="number" value={quantityState} onChange={handleQuantity} />
                            </div>
                            <div className="buttonContinue">
                                <button id='buttonContinueD' type="button" disabled={disable} onClick={() => { setCompleteMenu(true); setOpenModal(false) }}>Continue</button>
                            </div>
                            {
                                error && (<p id='errorMsg'>error</p>)
                            }
                        </div>
                        </div>
                        
                    </div>
                )
            }
        </div>
    )
}