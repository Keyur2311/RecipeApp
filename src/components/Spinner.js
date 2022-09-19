import React from 'react'
import loading from './loading.gif'
const Spinner = () => {
    return (
        <div className='text-center'>
            <p><b>Wait, Your Food is cooking..</b></p>
            <img src={loading} alt={loading} />
        </div>
    )
}


export default Spinner;