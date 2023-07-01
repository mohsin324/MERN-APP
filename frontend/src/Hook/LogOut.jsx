import { UseAuthContext } from "../Component/GlobalContext/AuthContext";
import { SIGN_OUT } from "../Component/Action/Action";
export const useLogOut = () => {
    const { dispatch } = UseAuthContext();
    const logout = () => {
        // remove user from localstorage
        localStorage.removeItem('user');
        dispatch({ type: SIGN_OUT })
    }
    return { logout }
}