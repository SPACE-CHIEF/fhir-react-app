import React from "react";
import { FhirClientContext } from "../../FhirClientContext";

function PName({ name = [] }) {
    let entry =
        name.find(nameRecord => nameRecord.use === "official") || name[0];
    if (!entry) {
        return <b>No Name</b>;
    }
    return <b>{entry.given.join(" ") + " " + entry.family}</b>;
}


// function PatientPhone(patient){
//     return <p>{patient.telecom[0].value}</p>
// }


// function PatientBanner(patient) {
//     return (
//         <div>
//             <PatientName name={patient.name} />
//             <span>
//                 Gender: <b>{patient.gender}</b>,{" "}
//             </span>
//             <span>
//                 DOB: <b>{patient.birthDate}</b>
//             </span>
//         </div>
//     );
// }

export default class PatientName extends React.Component {
    static contextType = FhirClientContext;
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            patient: null,
            error: null
        };
    }
    componentDidMount() {
        const client = this.context.client;
        console.log(client)
        this._loader = client.patient
            .read()
            .then(patient => {
                this.setState({ patient, loading: false, error: null });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    }
    render() {
        const { error, loading, patient } = this.state;
        if (loading) {
            return null;
        }
        if (error) {
            return error.message;
        }
        return <PName {...patient}/>;
    }
}
