import React from 'react'

const Hello = () =>{
    return(
        // <div>
        //     <h1>Hello Dilruk</h1>
        // </div>
        React.createElement('div', {id:'hello', className:'primary'} , React.createElement('h1', null,'Hello Dilruk'))
    )
}

export default Hello