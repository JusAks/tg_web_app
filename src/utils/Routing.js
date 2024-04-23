import Main from "../Pages/MainPage/Main";
import Shop from "../Pages/MainPage/Shop/Shop";

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
                element:<div>Game</div>
            },
            {
                path:'test',
                element:<div>Test</div>
            },
        ]
    }
]