import React , { useEffect , useState } from 'react';


const Login = ()=>{
    
    const [isAuth,setIsAuth]=useState(false)

    useEffect ( ()=>{
        setIsAuth(true)
    } , [] );
    
    return (
        <div className='loginContainer'>
            <div className='loginStatus'>
                {isAuth?'Welcome!': 'Not Authorized!'} 
            </div>
            <div className='loginAction'>
                <button>Connect Wallet</button>
            </div>
        </div>
    );
};

export default Login;