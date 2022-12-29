import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import React from "react";
import {useSelector} from "react-redux";

const WeatherTable = () => {
    const total = useSelector(state => state?.all?.pagination?.total) || 0;
    return (
        <>
        <table>
            <tbody>
            <TableHeader/>
            <TableRows/>
            </tbody>
        </table>
            <p>Total de registros: {total}</p>
        </>
    );
}

export default WeatherTable;
