import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helper.js";
const useFetch = (url) => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    const fetchData = async () => {
        setLoading = true;
        const newRequest = axios.create({
            baseURL: `${BASE_URL}/api/`,
            withCredentials: true,
        });
        const res = newRequest.get(url).then(response => {
            setData(response.data);
        }).catch(err => {
            setError(err);
        });
        setLoading = false;
    }

    useEffect(() => {
        fetchData();
    }, [url])

    const reFetch = async () => {
        setLoading = true;
        const newRequest = axios.create({
            baseURL: `${BASE_URL}/api/`,
            withCredentials: true,
        });
        const res = newRequest.get(url).then(response => {
            setData(response.data);
        }).catch(err => {
            setError(err);
        });
        setLoading = false;
    };





    return { data, loading, error, reFetch };
}

export default useFetch;