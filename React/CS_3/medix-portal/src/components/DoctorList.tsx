import React from "react";
import {Link} from 'react-router-dom'

interface Doctor {
    id:number;
    patients: number[];
}

const doctors: Doctor[] = [
    { id: 1, patients: [101, 102] },
    { id: 2, patients: [201] },
    { id: 3, patients: [301, 302, 303] },
];

const DoctorList: React.FC = () => {
    return (
        <div>
            <h1>Doctors</h1>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id}>
                        <Link to={`/doctors/${doctor.id}/patients/${doctor.patients[0]}`}>
                            Doctor {doctor.id}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorList;
