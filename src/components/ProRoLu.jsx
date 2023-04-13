import { Navigate, Outlet } from "react-router-dom";

export const ProRoLu = ({
    isAllowed,
    redirectTo = '/AccesoLunes',
    children,
})=>{
    if(!isAllowed){
        return <Navigate to={redirectTo} replace />;
    }

    return children ? children : <Outlet />;
};