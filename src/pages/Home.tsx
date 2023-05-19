import React from "react";
import { useState } from "react";

type Album = {
    name: string;
}


export const Home = () => {
    const [name, setName] = useState("Enter album Name...");
    const [albums, setAlbums] = useState([{name: "Album 1"}, {name: "Album 2"}]);

    return (
        <div
        >
            <h1>Radical Record Store</h1>
            <div>
                <h2>Albums</h2>
                <h2>Album Count: {albums.length}</h2>
                <ul>
                    {albums.length > 0 ?albums.map((album, index) => (
                        <li key={index}>{JSON.stringify(album)}</li>
                    )): <li>No Albums</li>}
                </ul>
            </div>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={() => {
                    setAlbums([...albums, {name}]);
                    setName("");
                }}>Add Album</button>
            </div>
        </div>
    )
}