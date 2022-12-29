import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

const TableRows = () => {
    const allData = useSelector(state => state.all.results);

    return allData?.slice(0, 10).map(register =>
        <tr key={register._id}>
            <td className="file">{<Link className="link" to={register._id}>{register._id}</Link>}</td>
            <td>{register.cityid}</td>
            <td>{register.name}</td>
            <td>{register.state}</td>
            <td>{register.probabilityofprecip}</td>
            <td>{register.relativehumidity}</td>
            <td>{register.lastreporttime}</td>
            <td>{(register.probabilityofprecip > 60 || register.relativehumidity  > 50) ? 'SÍ': 'NO'}</td>
        </tr>
    );
};

export default TableRows;
