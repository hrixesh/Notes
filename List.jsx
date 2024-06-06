import React, { useState } from 'react';



export default function List(props){
    return(
        <div className='flex flex-wrap '>
            {
                props.data.map(
                    (d,i) => {
                        return (
                                <Item removeItemHandler={props.removeItemHandler} index={i} key={i} task={d}/> 
                        )
                    }
                )
            }

        </div>
    )
}


const Item = (props) => {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        setToggle(!toggle);

    }
    return (
     <div style={{
        background: toggle?'#1DBB48' : ''
     }}
     onClick={toggleHandler} className='m-5  bg-gray-400 text-black w-[21%] h-[250px]'>
    <div className='flex justify-between bg-gray-800 text-white p-2'
    style={{
        background: toggle?'#BB6C1D' : ''
     }}
     >
        <div className='text-center'>Notes</div>
        <div className='text-center cursor-pointer font-bold' onClick={() => props.removeItemHandler(props.index)}>X</div> 
    </div>
     <div className=' p-1 m-1'>
        {props.task}
     </div>
</div>
)
}


