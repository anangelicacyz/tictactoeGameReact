import { Link } from "react-router-dom"

const Main = () => {
    return (
        <div className="main">
            <h1 className="maintitle">
                Tic Tac Toe
            </h1>
            <Link to='/game' className="btn-game">¡Jugar!</Link>
        </div>
    )
}


export default Main