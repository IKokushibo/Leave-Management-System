import LoginUser from "../pages/LoginUserPage/LoginPage"
import LoginAdmin from "../pages/LoginAdminPage/LoginAdminPage"

const LoginRoute = {
  path: "/login-user",
  element:  <LoginUser/>
}
const LoginAdminRoute = {
  path: "/login-admin",
  element:  <LoginAdmin/>
}
export {LoginRoute,LoginAdminRoute}