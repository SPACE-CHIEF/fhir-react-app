import React from 'react';
import { Grid } from "@material-ui/core";
import { Page } from "./Home";
import { PageNoButton } from './PageNoButton';


function myGenetics(props) {
    return (
        <div style={{ marginRight: 24, marginLeft: 24, marginTop: 10, marginBottom: 20}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <PageNoButton subject="Bob Smith" content={["Age: 39, DOB: 05/06/1977, Gender: Male", <br />,
                        "Patient ID: 69432132, Phone: 561-321-1513", <br />, "PCP: Dr. Yuan, Phone: 671-456-7841",
                        <br />, "Insurance: Aetna Better Health"]}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Page buttonMessage="View All Results" subject={["Test Results", <br />, <strong>Results Available</strong>]}
                        content={["Report Type: ", <strong>Blood Test</strong>, <br />, "Date of Collection: 05/21/2021", <br />,
                            "Date of Results: 05/24/2021", <br />, <a>View Report</a>]}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PageNoButton subject={["Specialists", <br />]} content={[<strong>Oncologists</strong>, <br />, "Name: Dr. Khosravy",
                        , <br />, "Location: Woodbridge, VA", <br />, <br />, <strong>Gastroenterologist</strong>, <br />, "Name: Dr. Jasovitz", <br />,
                        "Location: Woodbridge, VA"]}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Page buttonMessage="View Order History" subject={["Test Orders", <br />]} content={[<strong>Pending Orders</strong>,
                    <br />, "Blood Test", <br />, <a>View/Print</a>, <br />, <br />, <strong>Completed Orders</strong>, <br />,
                        "Genetic Test", <br />, <a>View/Print</a>, <br />]}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PageNoButton subject={["Informational Resources", <br />]} content={["Many informational resources can be found online with the help of Google.", <br />]}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default myGenetics;