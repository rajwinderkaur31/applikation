
import  React, { useContext, useState } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import  { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import E_COMMERCE_APIService from '../../shared/api/service/E_COMMERCE_APIService'
import { registerUser} from '../../shared/interface/Interface'


export const SignInView = () => {
    const history = useHistory()
    const [username, setUsername] =useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [newUser, setNewUser] = useState({ username: '', password: '' })

    const signIn = ( ) => {
        setAuthenticatedUser(username)
        localStorage.setItem('username', username)
        history.push(RoutingPath.homeView)
    }

   const register =  async () =>  {
        try {
            const { data } = await E_COMMERCE_APIService.createUser(newUser)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

   }

   const handleChange = (event:React.ChangeEvent<HTMLInputElement>,target: registerUser) => {
    setNewUser({...newUser, [target]: event.target.value})




    return (
        <div>
        <span>Username: </span> <input onChange={event => setUsername(event.target.value)}/> <br></br>
        <button onClick={() => signIn()}>sign In</button>
        <hr />
        <h1>REGISTER NEW USER</h1>
        <input placeholder='username' onChange={event => handleChange(event,'username')} /> 
       <input  placeholder='password' type='password'onChange={event => handleChange(event, 'password')} />
       <button onClick={() => register()}>Register</button>
    </div>
    )  
}  
 
    


}
