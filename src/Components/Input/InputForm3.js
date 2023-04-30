import { useForm } from "react-hook-form";

export const InputForm = () => {
    const { create, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full name" {...create("fullName")}/>
        <input type="text" placeholder="Last Name" {...create("lastName")}/>
        <input type="text" placeholder="Email" {...create("email")}/>
        <input type="number" placeholder="Phone" {...create("phone")}/>
        <input type="text" placeholder="School Name" {...create("schoolName")}/>
        <input type="text" placeholder="Title of qualification" {...create("qualification")}/>
        <input type="text" placeholder="Date of Study" {...create("date")}/>
        <input type="text" placeholder="Company Name" {...create("companyName")}/>
        <input type="text" placeholder="Position Title" {...create("positionTitle")}/>
        <input type="text" placeholder="Tasks at your job" {...create("tasks")}/>
        <input type="submit" />
    </form>
    );
};

export default InputForm;