import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import {db} from "../../config/firebase";
import {Post} from "./post";

export interface Joke {
    id: string;
    description: string;
    userId: string;
    title: string;
    username: string;
}

export const Main = () => {
    const [jokeList , setJokeList] = useState<Joke[] | null >(null);
    const postsref = collection(db, "jokes");

    const getJokes = async () => {
        const data = await getDocs(postsref);
        setJokeList(data.docs.map((doc) => ({...doc.data(), id: doc.id} )) as Joke[]);
    }
    
    useEffect(() => {
        getJokes();
    } , []);

    return (
        <div>
            {jokeList?.map((joke) => 
            <Post post={joke}/>
            )}
        </div>
    );
}