import logoMastercraft from '../images/logo-mastercraft.svg'
import iconBookmark from '../images/icon-bookmark.svg'

export default function StandartContainer1() {
    return (
        <div className="containerStandart1">
            <div className="wrapperStandart1">
                <div className="logoMastercraft">
                    <img src={logoMastercraft} />
                </div>
                <div className="titlePart1">
                    Mastercraft Bamboo Monitor Riser
                </div>
                <div className="subtitlePart1">
                    A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                </div>
                <div className="contentPart1">
                    <div className="buttonBackThisP">
                        <button id='backThisP'>
                            Back this project
                        </button>
                    </div>
                    <div className="buttonBookmark">
                        <button id='Bookmark'>
                            <img id='iconBookmark' src={iconBookmark} /> <span>Bookmark</span>
                        </button>
                        <img id='icon2Bookmark' src={iconBookmark} />
                    </div>
                </div>
            </div>

        </div>
    )
}