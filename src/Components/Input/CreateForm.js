import { useState } from "react"
import './CreateForm.css'
import  profile from './profile.png'

function CreateForm() {
  const [formValues, setFormValues] = useState({
    firstName: "David",
    lastName: "Baker",
    email: "DavidLBaker@teleworm.us",
    phone: "+0370 0021462",
    school: "Episcopal High School",
    title: "Secondary education",
    date: "2011-04-12",
    company: "Microsoft",
    position: "CEO",
    tasks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean et tortor at risus.",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const[formDisplay, setFormDisplay] = useState(false);

  const formStyle = {
    display: formDisplay ? "none" : "flex",
  };

  const toggleVisibility = () => {
    setFormDisplay(!formDisplay);
  };

  return (
    <div className="form">
        <div className="formInput" style={formStyle}>
            <p className="paragraph">Enter your information</p>
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
            type="date"
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
        <button className="button" onClick={toggleVisibility}>Submit</button>
        </div>
            <div className="formValues">
                <ul className="listStyle">
                    <img className="image" src={profile} alt="profile"></img>
                    <div className="basicInfo">
                        <li className="bold">Basic Info</li>
                        <li>First Name: {formValues.firstName}</li>
                        <li>Last Name: {formValues.lastName}</li>
                        <li>Email: {formValues.email}</li>
                        <li>Phone number: {formValues.phone}</li>
                    </div>
                    <div className="education">
                    <li className="bold">Education</li>
                    <li>School: {formValues.school}</li>
                    <li>Title of qualification: {formValues.title}</li>
                    <li>Graduated: {formValues.date}</li>
                    </div>
                    <div className="work">
                    <li className="bold">Work experience</li>
                    <li>Company: {formValues.company}</li>
                    <li>Position: {formValues.position}</li>
                    <li id="tasks">Daily tasks: {formValues.tasks}</li>
                    </div>
                    <button className="button edit" onClick={toggleVisibility}>Edit</button>
                </ul>
        </div>
    </div>
  );
}

export default CreateForm;