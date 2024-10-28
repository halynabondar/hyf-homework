import {useState} from "react";

const apiKey = "TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM";
const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;

export default function EpicPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [image, setImage] = useState([]);


}