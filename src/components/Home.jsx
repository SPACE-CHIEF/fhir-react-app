import React from "react"
import { Grid } from '@material-ui/core';
import FhirClientProvider from "./FhirClientProvider";

function BoxNav(props){
    return(
      <div className="navBox">
        <div className="box-nav-wrap">
          <a href={props.link} class="button">{props.txt}</a>
        </div>
      </div>
    );
}

export function Title(props){
    return(
        <div className="title-wrap">
            <h1 className="topic-title">
                {props.subject}
            </h1>
        </div>
    );
}

export function Content(props){
    return(
        <div className="content-wrap">
            <p className="topic-content">
                {props.txt}
            </p>
        </div>
    );
}

export function Page(props){
    return(
        <div className="total-wrapper-dsktp">
            <Title subject={props.subject}/>
            <Content txt={props.content}/>
            <BoxNav txt={props.buttonMessage} link={props.link}/>
        </div>
    );
}


function Home(props) {
    return (
            <FhirClientProvider>
            <div style={{ marginRight: 24, marginLeft: 24, marginTop: 10, marginBottom: 20 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Page link= "./Messages" buttonMessage="Send Message" content="New unread message from Dr. Albertine Orn" subject="New Messages"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Page link ="./myGenetics" buttonMessage="See Genetic Analysis" content="Genetic Report is now availabe to view/print" subject="myGenetics"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Page link="./Appointments" buttonMessage="See All Visits" content="Reminder: Appointment scheduled for July 26 at 10am" subject="Upcoming Appointments"
                        />
                    </Grid>
                </Grid>
            </div>
            </FhirClientProvider>
    );
}

export default Home;