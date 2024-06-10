// import React, { useState, useEffect } from "react";
// import { nanoid } from "nanoid";
// import "./modal.css"
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// const UserModal = ({ open, toggle, addCar, editCar, isEditing, currentCar }) => {
//     const [form, setForm] = useState({
//         text: "",
//     });

//     useEffect(() => {
//         if (isEditing && currentCar) {
//             setForm(currentCar);
//         } else {
//             setForm({
//                 text: "",
//             });
//         }
//     }, [isEditing, currentCar]);
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === "text") {
//             setForm({
//                 ...form,
//                 [name]: value
//             });
//         } else if (name === "status") {
//             setSelectedStatus(value);
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const newCar = { ...form, id: nanoid(), status: selectedStatus }; // statusni qo'shish
//         if (isEditing) {
//             editCar(newCar);
//         } else {
//             addCar(newCar);
//         }
//         toggle();
//     };

//     return (
//         <Modal isOpen={open} toggle={toggle}>
//             <ModalHeader toggle={toggle}>
//                 <h1 className="text-center">{isEditing ? "Edit Car" : "Add ar"}</h1>
//             </ModalHeader>
//             <ModalBody>
//                 <form onSubmit={handleSubmit} id="submit">
//                     <input
//                         type="text"
//                         required
//                         placeholder="Text"
//                         name="text"
//                         className="form-control my-2"
//                         value={form.text}
//                         onChange={handleChange}
//                     />
//                     <select
//                         className="select_class"
//                         name="status"
//                         value={form.status}
//                         onChange={handleChange}
//                     >
//                         <option value="open">Open</option>
//                         <option value="pending">Pending</option>
//                         <option value="inprog">Progress</option>
//                         <option value="complete">Complete</option>
//                     </select>
//                 </form>
//             </ModalBody>
//             <ModalFooter>
//                 <button className="btn btn-danger" onClick={toggle}>
//                     Cancel
//                 </button>
//                 <button className="btn btn-success" type="submit" form="submit">
//                     {isEditing ? "Save Changes" : "Save"}
//                 </button>
//             </ModalFooter>
//         </Modal>
//     );
// };

// export default UserModal;


// import React, { useState, useEffect } from "react";
// import { nanoid } from "nanoid";
// import "./modal.css"
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// const [selectedList, setSelectedList] = useState('open');
// const UserModal = ({ open, toggle, addCar, editCar, isEditing, currentCar }) => {
//     const [form, setForm] = useState({
//         text: "",
//         status: "open",
//     });

//     useEffect(() => {
//         if (isEditing && currentCar) {
//             setForm(currentCar);
//         } else {
//             setForm({
//                 text: "",
//                 status: "open",
//             });
//         }
//     }, [isEditing, currentCar]);
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({
//             ...form,
//             [name]: value
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const newCar = { ...form, id: nanoid() };
//         if (isEditing) {
//             editCar(newCar);
//         } else {
//             addCar(newCar);
//         }
//         toggle();
//     };

//     return (
//         <Modal isOpen={open} toggle={toggle}>
//             <ModalHeader toggle={toggle}>
//                 <h1 className="text-center">{isEditing ? "Edit Car" : "Add Car"}</h1>
//             </ModalHeader>
//             <ModalBody>
//                 <form onSubmit={handleSubmit} id="submit">
//                     <input
//                         type="text"
//                         required
//                         placeholder="Text"
//                         name="text"
//                         className="form-control my-2"
//                         value={form.text}
//                         onChange={handleChange}
//                     />
//                     <select
//                         className="select_class"
//                         name="status"
//                         value={selectedList} onChange={(e) => setSelectedList(e.target.value)}
//                     >
//                         <option value="open">Open</option>
//                         <option value="pending">Pending</option>
//                         <option value="inprog">Progress</option>
//                         <option value="complete">Complete</option>
//                     </select>
//                 </form>
//             </ModalBody>
//             <ModalFooter>
//                 <button className="btn btn-danger" onClick={toggle}>
//                     Cancel
//                 </button>
//                 <button className="btn btn-success" type="submit" form="submit">
//                     {isEditing ? "Save Changes" : "Save"}
//                 </button>
//             </ModalFooter>
//         </Modal>
//     );
// };

// export default UserModal;


import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./modal.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UserModal = ({ open, toggle, addCar, editCar, isEditing, currentCar }) => {
    const [form, setForm] = useState({
        text: "",
        status: "",
    });

    useEffect(() => {
        if (isEditing && currentCar) {
            setForm(currentCar);
        } else {
            setForm({
                text: "",
                status: "",
            });
        }
    }, [isEditing, currentCar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCar = { ...form, id: nanoid() };
        if (isEditing) {
            editCar(newCar);
        } else {
            addCar(newCar);
        }
        toggle();
    };

    return (
        <Modal isOpen={open} toggle={toggle}  >
            <ModalHeader toggle={toggle}>
                <h1 className="text-center">{isEditing ? "Edit Car" : "Add Car"}</h1>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id="submit">
                    <input
                        type="text"
                        required
                        placeholder="Text"
                        name="text"
                        className="form-control my-2"
                        value={form.text}
                        onChange={handleChange}
                    />
                    <select
                        className="select_class"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    >
                        <option value="open">Open</option>
                        <option value="pending">Pending</option>
                        <option value="inprog">Progress</option>
                        <option value="complete">Complete</option>
                    </select>
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={toggle}>
                    Cancel
                </button>
                <button className="btn btn-success" type="submit" form="submit">
                    {isEditing ? "Save Changes" : "Save"}
                </button>
            </ModalFooter>
        </Modal>
    );
};

export default UserModal;
