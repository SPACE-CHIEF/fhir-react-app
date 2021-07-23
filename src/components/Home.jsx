import React, { useRef } from "react"
import { Link, withRouter } from "react-router-dom"
import { Grid } from '@material-ui/core';
import { FhirClientProvider, Patient } from "../components";

function BoxNav(props){
    return(
      <div className="navBox">
        <div className="box-nav-wrap">
          <a href="#" class="button">{props.txt}</a>
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
            <p2 className="topic-content">
                {props.txt}
            </p2>
        </div>
    );
}

export function Page(props){
    return(
        <div className="total-wrapper-dsktp">
            <Title subject={props.subject}/>
            <Content txt={props.content}/>
            <BoxNav txt={props.buttonMessage}/>
        </div>
    );
}
function Home(props) {
    return (
        <FhirClientProvider>
            <div style={{ marginRight: 24, marginLeft: 24, marginTop: 10, marginBottom: 20 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Page buttonMessage="Send Message" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam lacus tellus, semper et nulla quis, pharetra cursus metus. Fusce tincidunt mattis diam." subject="New Messages"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Page buttonMessage="See Genetic Analysis" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam lacus tellus, semper et nulla quis, pharetra cursus metus. Fusce tincidunt mattis diam." subject="myGenetics"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Page buttonMessage="See All Visits" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam lacus tellus, semper et nulla quis, pharetra cursus metus. Fusce tincidunt mattis diam." subject="Upcoming Appointments"
                        />
                    </Grid>
                </Grid>
            </div>
        </FhirClientProvider>
    );
}

export default withRouter(Home);