import {Link} from "react-app-dom"

function BotaoNavegador({route, nome}) {
    return (
        <Link to={route}>{nome}</Link>
    )
}

export default BotaoNavegador