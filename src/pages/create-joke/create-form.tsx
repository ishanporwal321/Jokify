import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
    title: string;
    description: string;
}

export const CreateForm = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const schema = yup.object().shape({
        title: yup.string().required("You must add A Title To the Joke!!!"),
        description: yup.string().required("Enter your Joke here!!!"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    })

    const postsref = collection(db, "jokes");

    const onCreateJoke = async (data:CreateFormData) => {
        await addDoc(postsref, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        })
        navigate("/");
    }

    return (
    <form onSubmit={handleSubmit(onCreateJoke)}> 
        <input placeholder="title..." {...register("title")}/>
        <p style={{color: "red"}}>{errors.title?.message}</p>
        <textarea placeholder="description..." {...register("description")}/>
        <p style={{color: "red"}}>{errors.description?.message}</p>
        <input type="submit"/>
    </form>
    );
}