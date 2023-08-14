import React, { useContext } from 'react'
import Rout from '../router/Rout';
import PublicRout from '../router/PublicRout';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {
    // const isAuth = false;
    // const {isAuth} = useContext(AuthContext);
    const { isAuth, isLoading } = useContext(AuthContext); //5

    console.log(isAuth)

if(isLoading)  {
    return <Loader/> //4
}
    return (
        <div>
        {isAuth
        ?<Rout/>
        :
        <PublicRout/>}
        </div>
        // <Routes>
        //     {/* {routes.map(route => 
                 
        //         <Route
        //           component={route.component}
        //           path={route.path} 
        //           exact={route.exact}
        //         />         
        //      )} */}
        // {/* //     <Route path='/about' element={<About />} />
        // //     <Route exact path='/posts' element={<Posts />} />
        // //     <Route exact path='/posts/:id' element={<PostIdPage/>} />
        // //     <Route path="*" element={<Posts />} />        
        // // </Routes> */}
        
    )
}

export default AppRouter

