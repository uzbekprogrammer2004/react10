import http from "./config";
const auth = {
    sign_up : (data)=> http.post('/auth/register',data),
    verify_code : (data)=>
}
export default auth

