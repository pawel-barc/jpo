import { useAuth } from "../contexts/AuthContext";

const LoggedHeader = () => {

    const {logout} = useAuth();

    return (
        <button onClick={logout}>Logout</button>
    )
}

export default LoggedHeader;