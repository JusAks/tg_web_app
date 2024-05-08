import Main from "../Pages/MainPage/Main";
import Shop from "../Pages/MainPage/Shop/Shop";
import Test from "../Pages/TestPage/Test";
import Game from "../Pages/GamePage/Game";
import Secondary from "../Pages/Secondary/Secondary";

export const routing = [
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                index:true,
                element:<Shop/>
            },
            {
                path:'game',
                element:<Game/>
            },
            {
                path:'test',
                element:<Test/>
            },
        ]
    },
    {
        path : 'admin',
        element : <Secondary/>
    }
]