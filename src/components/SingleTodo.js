// import React, { useEffect, useRef, useState } from "react";
// import styles from "./InputField.module.css";
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { IoCheckmarkDone } from "react-icons/io5";

// const SingleTodo = ([todo, todos, setTodos]) => {
//   const [edit, setEdit] = useState(false);
//   const [editTodo, setEditTodo] = useState(todo.todo);

//   const handleDone = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const handleDelete = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const handleEdit = (e, id) => {
//     e.preventDefault();

//     setTodos(
//       todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
//     );
//     setEdit(false);
//   };

//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   return (
//     <form
//       className={styles.todos_single}
//       onSubmit={(e) => handleEdit(e, todo.id)}
//     >
//       {edit ? (
//         <input
//           value={editTodo}
//           ref={inputRef}
//           onChange={(e) => setEditTodo(e.target.value)}
//           className={styles.todos_single_text}
//         />
//       ) : todo.completed ? (
//         <span className={styles.todos_single_text}>{todo} </span>
//       ) : (
//         <span className={styles.todos_single_text}>{todo} </span>
//       )}
//       <div>
//         <span
//           className={styles.icon}
//           onClick={() => {
//             if (!edit && !todo.completed) {
//               setEdit(!edit);
//             }
//           }}
//         >
//           <AiFillEdit />
//         </span>
//         <span className={styles.icon} onClick={() => handleDelete(todo.id)}>
//           <AiFillDelete />
//         </span>
//         <span className={styles.icon} onClick={() => handleDone(todo.id)}>
//           <IoCheckmarkDone />
//         </span>
//       </div>
//     </form>
//   );
// };

// export default SingleTodo;
