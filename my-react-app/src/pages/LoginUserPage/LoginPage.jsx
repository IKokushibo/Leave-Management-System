import { Helmet } from 'react-helmet'
import EnvelopeICO from './Mail.svg'
import Password from './Password.svg'
import Arrow from './Arrow_Right_SM.svg'


function Login() {
  

  return (
    <>
    <Helmet>   
      <title>Login Page</title>
    </Helmet>
    
     <div className="w-full h-screen flex justify-center items-center flex-col"  >
        <div  className="w-542px h-567px bg-pageBg1 bg-opacity-50 rounded-xl drop-shadow-2xl
        flex justify-between items-center flex-col">
          <div className="flex justify-center items-center flex-col mt-10">
            <h1 className="font-bold text-24px">EMPLOYEE LOGIN PANEL</h1>
            <h3 className="text-16px" >Employee Leave Management System</h3>
          </div>

          <div className="flex-col h-300px w-400px flex items-center">

            <div className="flex relative ">                
            <input className="rounded-xl w-378px h-67px mb-10 p-5" type="text" id="Email" placeholder=" Email Address"/>
            <img className="size-7 absolute right-3 top-5" src={EnvelopeICO} alt="Envelope" />
            </div>

            <div className="flex relative ">
            <input className="rounded-xl w-378px h-67px p-5" type="password" id="Email" placeholder=" Password"/>
            <img className="size-7 absolute right-3 top-5" src={Password} alt="Envelope" />
            </div>

            <div className="flex relative top-16 ">
            <button className='hover:bg-pageBg1 rounded-xl w-378px h-67px p-5 bg-white font-bold text-20px'>Login</button>
            <img className="size-6 absolute right-32 top-6" src={Arrow} alt="Envelope" />

            </div>
         </div>         
        </div>
        <a href='/login-admin' className='mt-8 text-16px text-blue-800 font-bold underline'>Go to Admin Panel</a>
     </div>
    </>
  )
}

export default Login
