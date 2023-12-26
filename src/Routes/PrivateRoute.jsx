import { Navigate } from "react-router-dom";
import useProvider from "../Hooks/useProvider";

const PrivateRoute = ({children}) => {
    const {loading,user} = useProvider()
    
    if (loading) {
        return <div className="grid justify-center min-h-screen content-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if (user) {
       return children
    }
    return (
         <Navigate to={'/sign-in'}></Navigate>
    );
};

export default PrivateRoute;