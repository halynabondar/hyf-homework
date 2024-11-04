import React from 'react';

const apiKey = "TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM";

export default async function AstronomyPicture({url, title, explanation}) {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await res.json();

    return (
        <div>
            <h1>Astronomy Picture of the Day</h1>
            <img src={data.url} alt={data.title} />
            <p>{data.title}</p>
            <p>{data.explanation}</p>
        </div>
    );
}
