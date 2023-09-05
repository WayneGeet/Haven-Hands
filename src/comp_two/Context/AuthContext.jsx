import {createContext, useState, useEffect} from "react"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [authToken, setAuthToken] = useState(null)
    const loginUser = async (e) => {
        const response = await fetch("http://127.0.0.1:8000/api/token/",{
            method:"POST",
            headers:{
                "ContentType":"application/json"
            },
            body:JSON.stringify({
                "email":e.target.email.value,
                "password":e.target.password.value
            })
        })
        const data = await response.json()
        if (response.status === 200){
            setAuthToken(data)
        }
        else{
            alert("Something went wrong")
        }
    }
    return(
        <AuthContext.Provider value={{name:"Wayne"}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext