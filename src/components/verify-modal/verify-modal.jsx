
import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import auth from "../../service/auth";
import "./modal.css"
const VerifyModal = ({open,toggle}) => {
    const [code, setCode] = useState("")
    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            code,
            email: localStorage.getItem("email")
        }
        try{
            const response = await auth.verify_code(payload)

        }catch{
            console.log(error);
        }
    };
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1 className="texth1" >Enter Code</h1>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id="submit">
                    <input type="text"
                    placeholder="Code"
                    className="form-control my-2"
                    onChange={(e)=>setCode(e.target.value)}
                    />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={toggle} >Cancel</button>
                <button className="btn btn-success" onClick={toggle} type="submit" form="Submit" >Save</button>
            </ModalFooter>
        </Modal>
    );
};
export default VerifyModal;
