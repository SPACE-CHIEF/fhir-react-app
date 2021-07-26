import React from 'react';
import { Content, Title } from './Home';

export default function PageNoButton(props){
    return(
        <div className="total-wrapper-dsktp">
            <Title subject={props.subject}/>
            <Content txt={props.content}/>
        </div>
    );
}