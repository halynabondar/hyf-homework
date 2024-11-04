"use client"

import React from 'react';
import {useEffect, useState} from "react";

const apiKey = "TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM";
const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;

export default function MarsRoverPage() {

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchPhotos = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPhotos(data.photos);
            } catch (error) {
                console.error("Error fetching Mars Rover photos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (loading) return <p>Loading Mars Rover photos...</p>;

    return (
        <>
            <div style={{margin: "40px"}}>
                <h2 style={{paddingBottom: "20px"}}>Mars Rover Photos</h2>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
                    {photos.map((photo) => (
                        <div key={photo.id} style={{width: '200px'}}>
                            <img src={photo.img_src} alt="Mars Rover" style={{width: '100%'}}/>
                            <p>Captured on: {photo.earth_date}</p>
                            <p>Rover: {photo.rover.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}