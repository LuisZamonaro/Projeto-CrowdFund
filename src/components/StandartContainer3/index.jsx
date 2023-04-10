




export default function StandartContainer3 ({setOpenModal}) {

    

    return (
        <div className="containerStandart3" onClick={() => setOpenModal(prevState => !prevState)}>
            <div className="wrapperStandart3">
                <div className="titlePart3">
                    About this project
                </div>
                <div className="text1Part3">
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </div>
                <div className="text2Part3">
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </div>
                <div className="containerDonateOp">
                    <div className="part1Donate">
                        <div className="nameStand">
                            Bamboo Stand
                        </div>
                        <div className="pledge">
                            Pledge $25 or more
                        </div>
                    </div>
                    <div className="part2Donate">
                        <div className="textDonate">
                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.
                        </div>
                    </div>
                    <div className="part3Donate">
                        <div className="numberLeft">
                            <span className="numberP3">101</span>  left
                        </div>
                        <div className="buttonSR">
                            Select Reward
                        </div>
                    </div>
                </div>
                <div className="containerDonateOp">
                    <div className="part1Donate">
                        <div className="nameStand">
                            Black Edition Stand
                        </div>
                        <div className="pledge">
                            Pledge $75 or more
                        </div>
                    </div>
                    <div className="part2Donate">
                        <div className="textDonate">
                            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                            member list. Shipping is included.
                        </div>
                    </div>
                    <div className="part3Donate">
                        <div className="numberLeft">
                            <span className="numberP3">64</span>  left
                        </div>
                        <div className="buttonSR">
                            Select Reward
                        </div>
                    </div>
                </div>
                <div className="containerDonateOp" id="containerDonateOpOS">
                    <div className="part1Donate">
                        <div className="nameStand">
                            Mahogany Special Edition
                        </div>
                        <div className="pledge">
                            Pledge $200 or more
                        </div>
                    </div>
                    <div className="part2Donate">
                        <div className="textDonate">
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                            to our Backer member list. Shipping is included.
                        </div>
                    </div>
                    <div className="part3Donate">
                        <div className="numberLeft">
                            <span className="numberP3">0</span>  left
                        </div>
                        <div className="buttonSR" id="buttonOS">
                            Out of Stock
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}