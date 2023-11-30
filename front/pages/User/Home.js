import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";

export function Home(props) {
    const [jwt, setJwt] = useState("")

    useEffect(() => {
        setJwt(sessionStorage.getItem('token'))
    }, [])

    return (
        <NavBar />
    )
}