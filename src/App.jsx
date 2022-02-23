import React from 'react';
import Amazon from './components/Amazon';
import Netflix from './components/Netflix';

const Favseries = "Netflix";

function App(){
    return(
    <>
    <div className='heading'>
    <h1 className='heading_style'>Top Netflix And Amazon Series</h1>
    </div>
    {Favseries === "Netflix" ? <Netflix/> : <Amazon/>}
    </>
    );
}
export default App;