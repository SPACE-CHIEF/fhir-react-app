import React from "react";

const context = {
    client: null,
    setClient: function(client) {
        context.client = client;
    },
    patientId: null,
    setPatientId: function(client) {
        context.client = client;
    }
};

export const FhirClientContext = React.createContext(context);