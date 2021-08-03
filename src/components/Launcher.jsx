import React from "react";
import { oauth2 as SMART } from "fhirclient";


export default class Launcher extends React.Component {
    /**
     * This is configured to make a Standalone Launch, just in case it
     * is loaded directly. An EHR can still launch it by passing `iss`
     * and `launch` url parameters
     */
    componentDidMount() {
        SMART.authorize({
            clientId: "127afa4e-286f-47ae-ac19-ecc3d7f4ddac",
            // clientId: "cea79e43-d84e-4a3d-aa95-dc96dd68cecd",
            scope: "launch launch/patient offline_access openid profile patient/Patient.read fhirUser",
            // redirectUri: "https://fhir-react.herokuapp.com/Home",
            redirectUri: "http://localhost:3000/Home",
            // patientID: 87a339d0-8cae-418e-89c7-8651e6aab3c6
            // iss: "https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSIsImIiOiI4N2EzMzlkMC04Y2FlLTQxOGUtODljNy04NjUxZTZhYWIzYzYifQ/fhir"
            // iss: "https://fhir-myrecord.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d",
            iss: "https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSJ9/fhir/",
            // patientID: 87a339d0-8cae-418e-89c7-8651e6aab3c6
            // iss: "https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSIsImIiOiI4N2EzMzlkMC04Y2FlLTQxOGUtODljNy04NjUxZTZhYWIzYzYifQ/fhir"
        });
    }
    /**
     * Could also return `null` for empty page
     */
    render = () => null;
}