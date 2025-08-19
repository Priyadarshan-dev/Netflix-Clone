import React, { useEffect, useState } from 'react'
import { auth, db } from '../Services/Firebase'
import { collection, onSnapshot } from "firebase/firestore";

function MyList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const user = auth.currentUser;
        const removeListener = onSnapshot(
            collection(db, "users", user.uid, "myList"),
            (snapshot) => {
                setMovies(snapshot.docs.map(doc => doc.data()));
            }
        );
        return () => removeListener();
    }, []);

    return (
        <>
            <div className="bg-black min-h-screen px-9">
                <div className='text-3xl font-bold text-white'>My List</div>
                <div className="flex flex-wrap gap-4 justify-start py-8">
                    {movies.map(movie => (
                        <div
                            key={movie.id}
                            className="group relative w-[220px]">
                            <div className="relative h-[130px] w-full overflow-hidden rounded-lg">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    className="h-full w-full object-cover rounded transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-[130px] bg-black opacity-0 group-hover:opacity-100 transition duration-300 p-3 flex flex-col justify-between z-50">
                                <div className="flex items-center gap-2">
                                    <button className="bg-white text-black px-2 py-1 rounded-full text-xs"><i className="fa-solid fa-play"></i></button>
                                    <button className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs"><i className="fa-solid fa-thumbs-up"></i></button>
                                    <button className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs"><i className="fa-solid fa-thumbs-down"></i></button>
                                    <button className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs"><i className="fa-solid fa-plus"></i></button>
                                    <button className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs"><i className="fa-solid fa-angle-down"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MyList;
