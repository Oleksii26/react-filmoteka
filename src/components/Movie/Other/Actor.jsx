import { useParams, useNavigate, Link} from "react-router-dom"
import { useEffect, useState } from "react"
import { searchPerson } from "../../helper"
import { IMAGE } from "../../helper"

const Actor = () => {
    
    const navigate = useNavigate()
    const [actor, setActor] = useState([])
    const { actorId } = useParams()
    useEffect(() => {
        searchPerson(actorId).then(data => setActor(data))
    }, [actorId])

    const { birthday, id, name, profile_path, biography } = actor

  

    return <>
    <Link onClick={() => navigate(-1)}>◄Back</Link>
        <div key={id}>
            <img width={200} src={`${IMAGE}${profile_path}`} alt={name} />
            <h3>{name}</h3>
            <p>{birthday || '(unknown informations)'}</p>
            <p>{biography || '(unknown informations)'}</p>
        </div>
    </>

}

export default Actor