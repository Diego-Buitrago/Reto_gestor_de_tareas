import { withRouter } from 'react-router-dom';
import useAuthContext from '../hooks/useContext'

import "../styles/login.css";

function Logout() {

    const {logout} = useAuthContext();
    logout();
    return null
};

export default withRouter(Logout); 