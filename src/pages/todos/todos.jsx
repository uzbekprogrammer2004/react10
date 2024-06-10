// // import React, { useState } from 'react';

// // const TodoManager = () => {
// //   const [todos, setTodos] = useState({
// //     open: [{ id: 1, title: 'Task 1' }],
// //     pending: [{ id: 2, title: 'Task 2' }],
// //     inprog: [{ id: 3, title: 'Task 3' }],
// //     complete: [{ id: 4, title: 'Task 4' }]
// //   });
// //   const [newTodoTitle, setNewTodoTitle] = useState('');
// //   const [selectedList, setSelectedList] = useState('open');

// //   const addTodo = () => {
// //     if (newTodoTitle.trim() !== '') {
// //       const newTodo = { id: Math.random(), title: newTodoTitle };
// //       setTodos({ ...todos, [selectedList]: [...todos[selectedList], newTodo] });
// //       setNewTodoTitle('');
// //     }
// //   };
// //   return (
// //     <div>
// //       <h1>Todo Manager</h1>
// //       <div>
// //         <input
// //           type="text"
// //           value={newTodoTitle}
// //           onChange={(e) => setNewTodoTitle(e.target.value)}
// //           placeholder="Enter todo title"
// //         />
// //         <select value={selectedList} onChange={(e) => setSelectedList(e.target.value)}>
// //           <input type="text" value={"textni kiriting"} />
// //           <option value="open">Open</option>
// //           <option value="pending">Pending</option>
// //           <option value="inprog">In Progress</option>
// //           <option value="complete">Complete</option>
// //         </select>
// //         <button onClick={addTodo}>Add Todo</button>
// //       </div>
// //       <ul>
// //         {todos[selectedList].map(todo => (
// //           <li key={todo.id}>{todo.title}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TodoManager;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import UserModal from "../../components/modal/modal";
// import "./todos.css"

// const Newproject = () => {
//   const [cars, setCars] = useState([]);
//   const [modal, setModal] = useState(false);
//   const [search, setSearch] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentCar, setCurrentCar] = useState(null);
//   const [todos, setTodos] = useState({
//     open: [{ id: 1, title: 'Task 1' }],
//     pending: [{ id: 2, title: 'Task 2' }],
//     inprog: [{ id: 3, title: 'Task 3' }],
//     complete: [{ id: 4, title: 'Task 4' }]
//   });
//   const [newTodoTitle, setNewTodoTitle] = useState('');
//   const [selectedList, setSelectedList] = useState('open');

//   const addTodo = () => {
//     if (newTodoTitle.trim() !== '') {
//       const newTodo = { id: Math.random(), title: newTodoTitle };
//       setTodos({ ...todos, [selectedList]: [...todos[selectedList], newTodo] });
//       setNewTodoTitle('');
//     }
//   };
//   const openModal = () => {
//     setModal(true);
//   };
//   const toggle = () => {
//     setModal(!modal);
//     setIsEditing(false);
//     setCurrentCar(null);
//   };

//   const addCar = (car) => {
//     setCars([...cars, car]);
//   };

//   const deleteCar = (id) => {
//     const newCars = cars.filter((car) => car.id !== id);
//     setCars(newCars);
//   };

//   const startEditing = (id) => {
//     const carToEdit = cars.find((car) => car.id === id);
//     setCurrentCar(carToEdit);
//     setIsEditing(true);
//     openModal();
//   };

//   const editCar = (editedCar) => {
//     const newCars = cars.map((car) =>
//       car.id === editedCar.id ? editedCar : car
//     );
//     setCars(newCars);
//   };

//   return (
//     <>
//       <UserModal
//         open={modal}
//         toggle={toggle}
//         addCar={addCar}
//         editCar={editCar}
//         isEditing={isEditing}
//         currentCar={currentCar}
//       />
// {cars.map((item, index) => {
//   if (item.status === "open") {
//     return (
//       <div className="cards">
//         <h2>Open</h2>
//         <div className="col-4">
//           <button className="btn btn-success btn_add" onClick={openModal}>
//             {isEditing ? "Edit" : "Add"}
//           </button>
//           <table className="table">
//             <tbody>
//               {cars
//                 .filter((item) =>
//                   item.text.toLowerCase().includes(search.toLowerCase())
//                 )
//                 .map((item, index) => (
//                   <tr key={item.id}>
//                     <td>{item.text}</td>
//                     <td>
//                       <div className="d-flex gap-2">
//                         <button
//                           className="btn btn-primary"
//                           onClick={() => startEditing(item.id)}
//                         >
//                           <i className="fa-solid fa-pen-to-square"></i>
//                         </button>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => deleteCar(item.id)}
//                         >
//                           <i className="fa-solid fa-trash"></i>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   } else if (item.status === "pending") {
//     return (
//       <div className="cards">
//         <h2>Pending</h2>
//         <div className="col-4">
//           <button className="btn btn-success btn_add" onClick={openModal}>
//             {isEditing ? "Edit" : "Add"}
//           </button>
//           <table className="table">
//             <tbody>
//               {cars
//                 .filter((item) =>
//                   item.text.toLowerCase().includes(search.toLowerCase())
//                 )
//                 .map((item, index) => (
//                   <tr key={item.id}>
//                     <td>{item.text}</td>
//                     <td>
//                       <div className="d-flex gap-2">
//                         <button
//                           className="btn btn-primary"
//                           onClick={() => startEditing(item.id)}
//                         >
//                           <i className="fa-solid fa-pen-to-square"></i>
//                         </button>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => deleteCar(item.id)}
//                         >
//                           <i className="fa-solid fa-trash"></i>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   } else {
//     return null; // Boshqa holatlarga oid bo'limlar qo'shilsin
//   }
// })}
//   } else if (item.status === "pending") {
//     return (
// <div className="cards">
//         <h2>Inprog</h2>
//         <div className="col-4">
//           <button className="btn btn-success btn_add " onClick={openModal}>
//             {isEditing ? "Edit" : "Add"}
//           </button>
//           <table className="table">
//             <tbody>
//               {cars
//                 .filter((item) =>
//                   item.text.toLowerCase().includes(search.toLowerCase())
//                 )
//                 .map((item, index) => (
//                   <tr key={item.id}>
//                     <td>{item.text}</td>
//                     <td>
//                       <div className="d-flex gap-2">
//                         <button
//                           className="btn btn-primary"
//                           onClick={() => startEditing(item.id)}
//                         >
//                           <i className="fa-solid fa-pen-to-square"></i>
//                         </button>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => deleteCar(item.id)}
//                         >
//                           <i className="fa-solid fa-trash"></i>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   } else {
//     return null; // Boshqa holatlarga oid bo'limlar qo'shilsin
//   }
// })}
//   } else if (item.status === "pending") {
//     return (
//       <div className="cards">
//         <h2>Complete</h2>
//         <div className="col-4">
//           <button className="btn btn-success btn_add" onClick={openModal}>
//             {isEditing ? "Edit" : "Add"}
//           </button>
//           <table className="table">
//             <tbody>
//               {cars
//                 .filter((item) =>
//                   item.text.toLowerCase().includes(search.toLowerCase())
//                 )
//                 .map((item, index) => (
//                   <tr key={item.id}>
//                     <td>{item.text}</td>
//                     <td>
//                       <div className="d-flex gap-2">
//                         <button
//                           className="btn btn-primary"
//                           onClick={() => startEditing(item.id)}
//                         >
//                           <i className="fa-solid fa-pen-to-square"></i>
//                         </button>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => deleteCar(item.id)}
//                         >
//                           <i className="fa-solid fa-trash"></i>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//     );
//   } else {
//     return null; // Boshqa holatlarga oid bo'limlar qo'shilsin
//   }
// })}





//     </>
//   );
// };
// export default Newproject;


import React, { useState } from "react";
import UserModal from "../../components/modal/modal";
import "./todos.css";

const Newproject = () => {
  const [cars, setCars] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);
  const [todos, setTodos] = useState({
    open: [{ id: 1, title: 'Task 1' }],
    pending: [{ id: 2, title: 'Task 2' }],
    inprog: [{ id: 3, title: 'Task 3' }],
    complete: [{ id: 4, title: 'Task 4' }]
  });
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const addTodo = () => {
    if (newTodoTitle.trim() !== '') {
      const newTodo = { id: Math.random(), title: newTodoTitle };
      setTodos({ ...todos, [selectedList]: [...todos[selectedList], newTodo] });
      setNewTodoTitle('');
    }
  };
  const openModal = () => {
    setModal(true);
  };
  const toggle = () => {
    setModal(!modal);
    setIsEditing(false);
    setCurrentCar(null);
  };

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  const deleteCar = (id) => {
    const newCars = cars.filter((car) => car.id !== id);
    setCars(newCars);
  };

  const startEditing = (id) => {
    const carToEdit = cars.find((car) => car.id === id);
    setCurrentCar(carToEdit);
    setIsEditing(true);
    openModal();
  };

  const editCar = (editedCar) => {
    const newCars = cars.map((car) =>
      car.id === editedCar.id ? editedCar : car
    );
    setCars(newCars);
  };

  return (
    <>
      <UserModal
        open={modal}
        toggle={toggle}
        addCar={addCar}
        editCar={editCar}
        isEditing={isEditing}
        currentCar={currentCar}
      />
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success" onClick={openModal}>
            {isEditing ? "Edit Car" : "Add Car"}
          </button>
        </div>
        <div className="col-8">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {cars.map((item, index) => {
        console.log(item.status);
        if (item.status === "open") {
          return (
            <div className="cards">
              <h2>Open</h2>
              <div className="col-4">
                <button className="btn btn-success btn_add" onClick={openModal}>
                  {isEditing ? "Edit" : "Add"}
                </button>
                <table className="table">
                  <tbody>
                    {cars
                      .filter((item) =>
                        item.text.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => (
                        <tr key={item.id}>
                          <td>{item.text}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-primary"
                                onClick={() => startEditing(item.id)}
                              >
                                <i className="fa-solid fa-pen-to-square"></i>
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => deleteCar(item.id)}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        } else if (item.status === "pending") {
          return (
            <div className="cards">
              <h2>Pending</h2>
              <div className="col-4">
                <button className="btn btn-success btn_add" onClick={openModal}>
                  {isEditing ? "Edit" : "Add"}
                </button>
                <table className="table">
                  <tbody>
                    {cars
                      .filter((item) =>
                        item.text.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => (
                        <tr key={item.id}>
                          <td>{item.text}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-primary"
                                onClick={() => startEditing(item.id)}
                              >
                                <i className="fa-solid fa-pen-to-square"></i>
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => deleteCar(item.id)}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        } else if (item.status === "inprog") {
          return (
            <div className="cards">
              <h2>Inprog</h2>
              <div className="col-4">
                <button className="btn btn-success btn_add " onClick={openModal}>
                  {isEditing ? "Edit" : "Add"}
                </button>
                <table className="table">
                  <tbody>
                    {cars
                      .filter((item) =>
                        item.text.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => (
                        <tr key={item.id}>
                          <td>{item.text}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-primary"
                                onClick={() => startEditing(item.id)}
                              >
                                <i className="fa-solid fa-pen-to-square"></i>
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => deleteCar(item.id)}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        } else if (item.status === "complete") {
          return (
            <div className="cards">
              <h2>Complete</h2>
              <div className="col-4">
                <button className="btn btn-success btn_add" onClick={openModal}>
                  {isEditing ? "Edit" : "Add"}
                </button>
                <table className="table">
                  <tbody>
                    {cars
                      .filter((item) =>
                        item.text.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => (
                        <tr key={item.id}>
                          <td>{item.text}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-primary"
                                onClick={() => startEditing(item.id)}
                              >
                                <i className="fa-solid fa-pen-to-square"></i>
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => deleteCar(item.id)}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        } else {
          return null; // Boshqa holatlarga oid bo'limlar qo'shilsin
        }
      })}
    </>
  );
};

export default Newproject;
