"use client"

import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

const apiKey = "TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM";

export default function SearchEpicImage() {
    const searchParams = useSearchParams()
    const searchDate = searchParams.get("search");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (!searchDate) return;

        setLoading(true);
        setError(null);

        const dateParts = searchDate.split("-");
        const formattedDate = `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;
        const url = `https://api.nasa.gov/EPIC/api/natural/date/${searchDate}?api_key=${apiKey}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch EPIC images.");
                }
                return response.json();
            })
            .then((data) => {
                if (data.length === 0) {
                    throw new Error("No images found for this date.");
                }

                const firstImage = data[0];
                const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${firstImage.image}.png`;
                setImage(imageUrl);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [searchDate]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {image ? (
                <img style={{height:"700px"}} src={image} alt={`NASA EPIC Image for ${searchDate}`}/>
            ) : (
                <p>Please specify a date in the URL query (e.g., ?search=2022-07-19).</p>
            )}
        </div>
    );
}