import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const InputForm = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.number().positive().integer(),
        schoolName: yup.string().required(),
        qualification: yup.string().required(),
        date: yup.date().required().date,
        companyName: yup.string().required(),
        positionTitle: yup.string().required(),
        tasks: yup.string().required(),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        setParagraph(<p>{JSON.stringify(data)}</p>);
    };
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Full name" {...register("fullName")}/>
                <input type="text" placeholder="Last Name" {...register("lastName")}/>
                <input type="text" placeholder="Email" {...register("email")}/>
                <input type="number" placeholder="Phone" {...register("phone")}/>
                <input type="text" placeholder="School Name" {...register("schoolName")}/>
                <input type="text" placeholder="Title of qualification" {...register("qualification")}/>
                <input type="date" placeholder="Date of Study" {...register("date")}/>
                <input type="text" placeholder="Company Name" {...register("companyName")}/>
                <input type="text" placeholder="Position Title" {...register("positionTitle")}/>
                <input type="text" placeholder="Tasks at your job" {...register("tasks")}/>
                <input type="submit" />
            </form>,
        {setParagraph}
    );
};

export default InputForm;