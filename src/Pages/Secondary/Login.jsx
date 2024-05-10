import React , { useEffect , useState } from 'react';
import { useTonAddress , useTonConnectUI , useTonWallet } from "@tonconnect/ui-react";

/*const secondaryAddress="0QAGrOtKF4KUWwWJD49KgjF8qSlo7083762sSfMTwkLZTqoN"
const secondaryAddress1="0:977e12d945a67a3a48b63ca98f18efb8064f4277f6ecec53417272e6e642396c"*/
const tonkeeperMainWalletMainnet = 'UQCXfhLZRaZ6Oki2PKmPGO-4Bk9Cd_bs7FNBcnLm5kI5bHPK'

const Login = ()=>{
    const [tonConnectUI, setOptions] = useTonConnectUI();
    const address = useTonAddress()
   /* const addressTr = useTonAddress(false)*/
    const UIAddress = address.slice(0,4)+"..."+address.slice(-4)
    /*
    const [info,setInfo]=useState()*/
    const wallet = useTonWallet();
    const [isAuth,setIsAuth]=useState(false)
    useEffect ( ()=>{
        setOptions({ language: "ru"})
        if(tonConnectUI.account){
            setIsAuth(true)
        }
        if(tonConnectUI.account === null){
            setIsAuth(false)
        }
    } , [tonConnectUI.account,setOptions] );
    
    const testFunk2= async ()=>{
        console.log(wallet)
       /*console.log(addressTr)
        tonConnectUI.openSingleWalletModal("Tonkeeper")
        
       let a = tonConnectUI.modal
        console.log(a)
       /!* 
        await tonConnectUI.openModal().then(res=>{debugger})
        await  tonConnectUI.getWallets().then(res=>{debugger})*!/
        debugger*/
    }
    
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: tonkeeperMainWalletMainnet, // destination address
                amount: "20000000" //Toncoin in nanotons
            }
        ]
    }
    const testTransaction= async ()=>{
        setOptions({ language: "en" });
        try {
           await tonConnectUI.sendTransaction(transaction)
        }
        catch (e){
            console.log(e)
            debugger
        }
        
    }
    const connect= async ()=>{
        try {
            await tonConnectUI.openModal()
        }
        catch (e){
            console.log(e)
        }
    }
    
    return (
        <div className='loginContainer'>
            <div className='loginStatus'>
                {isAuth?'Welcome! '+UIAddress: 'Not Authorized!'}
            </div>
            <div>{ wallet && wallet.name + wallet.account.chain }<img height={50} src={ wallet.imageUrl } alt=""/></div>
            <div className='loginAction'>
                <button disabled={isAuth} onClick={ connect }>Connect Wallet</button>
                <button onClick={  testFunk2}>test button</button>
                <button disabled={!isAuth} onClick={  ()=>{tonConnectUI.disconnect()}}>disconnect</button>
                <button disabled={!isAuth} onClick={testTransaction}>send 0.2 ton</button>
            </div>
        </div>
    );
};

export default Login;