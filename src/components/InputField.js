import React, {useRef} from 'react';
import styles from "./InputField.module.css";




const InputField = ({todo, setTodo, handleSubmit}) => {
  // const inputRef = useRef(null);
  return (

     <form className={styles.input} 
     onSubmit={(e)=>{handleSubmit(e); 
      // inputRef.current?.blur();
    }}
     >
      <input
      //  ref = {inputRef}
       type="text"
       value={todo}
       placeholder='Enter your task'
       className={styles.input_box}
       onChange={(e)=>setTodo(e.target.value)}  
      />

      <button className={styles.input_submit} type="submit">
        Go
      </button>
    </form>
  )
}

export default InputField