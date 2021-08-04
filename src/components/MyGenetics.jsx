import React from 'react';
import { Grid } from "@material-ui/core";
import { Page } from "./Home";
import PageNoButton from './PageNoButton';
import PatientName from "./Patient/PatientName";
import FhirClientProvider from "./FhirClientProvider";
import Popout from "./Popout/Popout";
import PatientDOB from './Patient/PatientDOB';
import Button from '@material-ui/core/Button';

export default function myGenetics() {
    return (
        <FhirClientProvider>
            <div style={{ marginRight: 24, marginLeft: 24, marginTop: 10, marginBottom: 20 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <PageNoButton subject="Marianna Acuna" content={["Age: 33, DOB: 02/05/1988, Gender: Female", <br/>,
                            "Patient ID: 128947831, Phone: 561-321-1513", <br />, "PCP: Dr. Yuan, Phone: 671-456-7841",
                            <br/>, "Insurance: Aetna Better Health", <Popout name={"Marianna Acuna"} medications={["Abrexane - 50ml", 
                                <br/>, "Zoloft - 50mg"]} family={[<strong>Mother</strong>, <br/>, "Type of cancer: Breast", 
                                <br/>, "Lineage: Mother", <br/>, "Ethnicity: Asian", <br/>, "Genetic Mutation: BRCA-2"]}
                                careTeam={["Albertine Orn, MD: Physician", <br/>, "Alex Berger: Registered Nurse", <br/>]}
                            />]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <PageNoButton subject={["Test Results", <br />]}
                            content={["Report Type: ", <strong>Genetic Test</strong>, <br />, "Date of Collection: 05/21/2021", <br />,
                                "Date of Results: 05/24/2021", <br/>, <a target="_blank" href="https://space-chief.github.io/LadyonFHIR/public/genomicreport.html">View/Print Report</a>, <br/>,
                                "Report Type: ", <strong>Blood Test</strong>, <br />, "Date of Collection: 05/28/2021", <br />,
                                "Date of Results: 06/01/2021", <br/>, <a>View/Print Report</a>]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <PageNoButton subject={["Specialists", <br />]} content={[<strong>Oncologists</strong>, <br />, "Name: Dr. Khosravy",
                            , <br />, "Location: Woodbridge, VA", <br />, <br />, <strong>Gastroenterologist</strong>, <br />, "Name: Dr. Jasovitz", <br />,
                            "Location: Woodbridge, VA"]}
                        />
                    </Grid>
                    {/* <Grid item xs={12} sm={3}>
                        <Page buttonMessage="View Order History" subject={["Test Orders", <br/>]} content={[<strong>Pending Orders</strong>,
                        <br />, "Blood Test", <br/>, <a>View/Print</a>, <br />, <br />, <strong>Completed Orders</strong>, <br />,
                            "Genetic Test", <br/>, <a>View/Print</a>, <br />]}
                        />
                    </Grid> */}
                    <Grid item xs={12} sm={6}>
                        <Page link="https://space-chief.github.io/LadyonFHIR/public/genomicpatienteducation.html" buttonMessage="View your Custom Resources" subject={["Informational Resources", <br/>]} content={[<a target="_blank" href="https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet">MBRCA Gene Mutations: Cancer Risk and Genetic Testing Fact Sheet - National Cancer Institute</a>, <br/>,
                            <a target="_blank" href="https://www.cdc.gov/cancer/breast/young_women/bringyourbrave/hereditary_breast_cancer/brca_gene_mutations.htm">BRCA Gene Mutations | Bring Your Brave | CDC</a>, <br/>,
                            <a target="_blank" href="https://www.nationalbreastcancer.org/what-to-do-if-youve-tested-positive">What To Do If You've Tested Positive - National Breast Cancer Foundation</a>, <br/>,
                            <a target="_blank" href="https://www.facingourrisk.org/info/hereditary-cancer-and-genetic-testing/hereditary-cancer-genes-and-risk/genes-by-name/brca1/overview">Overview of BRCA1 gene mutations (facingourrisk.org)</a>, <br/>,
                            <a target="_blank" href="https://www.facingourrisk.org/info/hereditary-cancer-and-genetic-testing/hereditary-cancer-genes-and-risk/genes-by-name/brca2/overview">Overview of BRCA2 gene mutations (facingourrisk.org)</a>, <br/>,
                        ]}
                        />
                    </Grid>
                </Grid>
            </div>
         </FhirClientProvider>
    );
}