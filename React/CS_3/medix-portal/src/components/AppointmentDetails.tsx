import React from "react";
import { useParams } from "react-router-dom";

interface AppointmentParams extends Record<string, string | undefined> {
    patientId: string;
    appointmentId: string;
}

const AppointmentDetails: React.FC = () => {
    const { patientId, appointmentId } = useParams<AppointmentParams>();

    if(!patientId || !appointmentId) {
        return <div>Missing or Invalid parameters.</div>;
    }

    const apptID = Number(appointmentId);
    if (isNaN(apptID)) {
        return <div>Invalid appointment ID.</div>;
    }

    return(
        <div style={{padding:'20px',border:'1px solid blue', margin:'10px'}}>
            <h1>Patient: {patientId}</h1>
            <h2>Appointment ID: {apptID}</h2>
        </div>

    );

};

export default AppointmentDetails;