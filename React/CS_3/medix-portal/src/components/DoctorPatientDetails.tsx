import React from "react";
import { useParams, Link } from "react-router-dom";

interface DoctorPatientParams extends Record<string, string | undefined> {
    doctorId: string;
    patientId: string;
}

const DoctorPatientDetails:React.FC=()=>{
    const { doctorId, patientId } = useParams<DoctorPatientParams>();

    if(!doctorId || !patientId) {
        return <div>Missing or Invalid parameters.</div>;
    }

    const numDoctorId = Number(doctorId);
    const numPatientId = Number(patientId);
    if (isNaN(numDoctorId) || isNaN(numPatientId)) {
        return (
            <div style={{color:'red',padding:'20px'}}>
                <h2>Error: Validation Failed</h2>
                <p>Both doctor ID and patient ID must be valid numbers.</p>
               <Link to="/">Back to Dashboard</Link>
            </div>
        );
};

    const appointmentIds = Array.from({ length: 3 }, (_, index) => numPatientId * 100 + index + 1);

    return(
        <div style={{padding:'20px',border:'1px solid green', margin:'10px'}}>
            <h1>Doctor ID: {numDoctorId}</h1>
            <h2>Patient ID: {numPatientId}</h2>
            <h3>Appointments</h3>
            <ul>
                {appointmentIds.map((appointmentId) => (
                    <li key={appointmentId}>
                        <Link
                            to={`/doctors/${numDoctorId}/patients/${numPatientId}/appointments/${appointmentId}`}
                        >
                            Appointment {appointmentId}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorPatientDetails;
