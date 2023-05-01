import { useState } from "react"
import './CreateForm.css'

function CreateForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    title: "",
    date: "",
    company: "",
    position: "",
    tasks: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="form">
        <div className="input">
        {/* <p>Basic Info</p> */}
        <input
            type="text"
            name="firstName"
            className="inputText"
            onChange={handleChange}
            placeholder="Full Name"
        ></input>
        <input
            type="text"
            name="lastName"
            className="inputText"
            onChange={handleChange}
            placeholder="Last Name"
        ></input>
        <input
            type="text"
            name="email"
            className="inputText"
            onChange={handleChange}
            placeholder="Email"
        ></input>
        <input
            type="number"
            name="phone"
            className="inputText"
            onChange={handleChange}
            placeholder="Phone"
        ></input>
        <input
            type="text"
            name="school"
            className="inputText"
            onChange={handleChange}
            placeholder="School Name"
        ></input>
        <input
            type="text"
            name="title"
            className="inputText"
            onChange={handleChange}
            placeholder="Title of qualification"
        ></input>
        <input
            type="text"
            name="date"
            className="inputText"
            onChange={handleChange}
            placeholder="Date of Study"
        ></input>
        <input
            type="text"
            name="company"
            className="inputText"
            onChange={handleChange}
            placeholder="Company Name"
        ></input>
        <input
            type="text"
            name="position"
            className="inputText"
            onChange={handleChange}
            placeholder="Position Title"
        ></input>
        <input
            type="text"
            name="tasks"
            className="inputText tasks"
            onChange={handleChange}
            placeholder="Tasks at your job"
        ></input>
        </div>
            <div className="formValues">
                <ul className="listStyle">
                    <li>{formValues.firstName}</li>
                    <li>{formValues.lastName}</li>
                    <li>{formValues.email}</li>
                    <li>{formValues.phone}</li>
                    <li>{formValues.school}</li>
                    <li>{formValues.title}</li>
                    <li>{formValues.date}</li>
                    <li>{formValues.company}</li>
                    <li>{formValues.position}</li>
                    <li>{formValues.tasks}</li>
                </ul>
        </div>
    </div>
  );
}

export default CreateForm;