import React, { Fragment } from 'react';

const Home = ({component, width, userboundary,handleChangeWidth}) => {
    return ( 
        <Fragment>    
            {component}
             { width }
            <input type = "number" onChange={handleChangeWidth} value= {userboundary}/>
        </Fragment> );
}
 
export default Home;