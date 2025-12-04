
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';


const PrivateRoute = ({children}) =>{

    const {user, loading} = useContext(AuthContext) ;
    const location = useLocation();

    if (loading) return <Loader></Loader>

    if(!user) return <Navigate to="/login" state={{from: location}} replace/>

    return children;
};

export default PrivateRoute;