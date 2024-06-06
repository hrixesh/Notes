import React, {useRef} from 'react';

 export default  function Input (props) {
    const inpRef = useRef();
    function sendData () {
        if (inpRef.current.value != ""){
        props.addTaskHandler(inpRef.current.value);
        inpRef.current.value = "";
    }
    }
    return (
        <div className=' flex gap-3 my-3 ' >

        <input type="text" className='p-3 border focus:outline-none flex-grow shadow-md' ref={inpRef}/>
        <button className='p-3 border shadow-md bg-green-900 text-white' onClick={sendData} >Add</button>

        </div>
    );
}

