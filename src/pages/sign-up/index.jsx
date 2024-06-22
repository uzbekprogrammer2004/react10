import axios from "axios";
import { useState } from "react"
import auth from "../../service/auth.js";
import VerifyModal from "../../components/verify-modal/verify-modal.jsx"
const Index = () => {
    const [form, setForm] = useState({})
    const [modal, setModal] = useState(false)
    const handleChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await auth.sign_up(form)
            if (response.status === 200) {
                setModal(true)
                localStorage.setItem("email", form.email)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {modal && <VerifyModal open={modal} toggle={() => setModal(false)} />}

            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-6 offset-3">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="text-center">Register</h1>
                            </div>
                            <div className="card-body">
                                <form id="submit" onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Email" onChange={handleChange} className="form-control my-2" name="email" />
                                    <input type="text" placeholder="Full Name" onChange={handleChange} className="form-control my-2" name="full_name" />
                                    <input type="text" placeholder="Password" onChange={handleChange} className="form-control my-2" name="password" />
                                    <input type="text" placeholder="Phone Number" onChange={handleChange} className="form-control my-2" name="phone_number" />
                                </form>
                            </div>
                            <div className="card-footer">
                                <button type="submit" form="submit" className="btn btn-success">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index

