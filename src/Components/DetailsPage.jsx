import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import {weatherTypes} from "../Redux/Reducers/WeatherReducer";
import {useDispatch} from "react-redux";

const DetailsPage = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const [details, setDetails] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas/?_id=${id}`);
            const data = await response.json();
            setDetails(data.results[0]);
            console.log(data);
            dispatch({type: weatherTypes.SET_DETAILS, payload: data })
        }
        getData();
    },[]);

    return (
        <div>
            <h1>{details?.name}</h1>
            <div>
                {Object.entries(details || {}).map(infoPiece => <h4>{`${infoPiece[0]}: ${infoPiece[1]}`}</h4>)}
            </div>
        </div>
    );
};

export default DetailsPage;
